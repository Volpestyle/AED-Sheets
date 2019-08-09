const { Entry, CurrentEntry } = require('../models/entry.model');
const mongoose = require('mongoose');
const { User } = require('../models/user.model');
const nodemailer = require('nodemailer');
const CONFIG = require('config');
const SMTPConnection = require('nodemailer/lib/smtp-connection');
const schedule = require('node-schedule');
const twilioClient = require('twilio')(
  CONFIG.get('twilio.SID'),
  CONFIG.get('twilio.auth-token'),
);

// Helper function to group objects with certain properties into arrays
const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});
const groupByName = groupBy('subName');
const groupByType = groupBy('subType');

// Weekly digest scheduler
// 0 17 * * 5
schedule.scheduleJob('*/2 * * * *', function() {
  emptyQueue('weekly');
});

// Daily digest scheduler
schedule.scheduleJob('0 17 * * *', function() {
  emptyQueue('daily');
});

// 'Emptys' the given queue by sending an singular email containing all entries in the queue and then setting it to empty.
emptyQueue = q => {
  User.find()
    //Get all users and populate the entrys
    .populate(`queues.${q}.entry`)
    .then(users => {
      users.forEach(async user => {
        if (!user.queues[q].length) return;
        // For each user, format the entrys in the given queue into an email and send to user
        let htmlBody = [];
        htmlBody.push(`<h2>Your ${q} D-Sheet digest.</h2><hr />`);
        let grouped = groupByName(user.queues[q]);
        for (let key of Object.keys(grouped)) {
          htmlBody.push(
            `<h3>${
              grouped[key].subIsShared ? 'Shared ' : ''
            }Subscription '${key}':</h3>`,
          );
          for (let i of grouped[key]) {
            htmlBody.push(`<p>${formatEntry(i.entry)}</p>`);
          }
        }
        htmlBody = htmlBody.join('');
        sendEmail(user.email, htmlBody);
        user.queues[q] = [];
        user.save();
      });
    });
};

// Returns html formatted entry as string
formatEntry = entry => {
  let body = [];
  body.push(`<b>Date:</b> ${entry.date}`);
  body.push(`<b>Submitted by:</b> ${entry.submittedBy}`);
  body.push(`<b>Location:</b> ${entry.location}`);
  body.push(`<b>Show:</b> ${entry.show}`);
  body.push(`<b>Classification:</b> ${entry.classification}`);
  body.push(`<b>What was heard on air:</b> ${entry.heardOnAir}`);
  body.push(`<b>Action taken</b>: ${entry.actionTaken}`);
  body.push(`<b>On Air:</b> ${entry.onAir}`);
  body.push(`<b>Funder:</b> ${entry.funder}`);
  body.push(`<b>Duration:</b> ${entry.duration}s`);
  if (entry.eTag) body.push(`<b>E-Tag:</b> ${entry.eTag}`);
  body.push(`<b>Entry:</b> ${entry.entry}`);
  body.push(`<b>Ticket Generated:</b> ${entry.createItServiceTicket}`);
  if (entry.notes.length) {
    body.push(`<b>Notes:</b> `);
    entry.notes.forEach(note => {
      body.push(`&nbsp&nbsp${note.author}: ${note.content}`);
    });
  }
  body.push(`<b>Has attachment</b>: ${entry.attachment ? 'Yes' : 'No'}`);
  body.push(
    `<a href="${CONFIG.get('root_url')}single/${entry._id}">View Here</a>`,
  );
  body = body.join('<br />');
  return body;
};

// Emails htmlBody to recipient
sendEmail = async (recipient, htmlBody) => {
  if (!recipient) {
    console.log(
      'Email could not be sent because the user has no email address',
    );
    return;
  }
  let transporter = nodemailer.createTransport({
    host: CONFIG.get('email.host'),
    port: CONFIG.get('email.port'),
    secure: CONFIG.get('email.secure'),
    auth: {
      user: CONFIG.get('email.user'),
      pass: CONFIG.get('email.pass'),
    },
  });
  let info = await transporter.sendMail({
    from: CONFIG.get('email.from'), // sender address
    to: recipient, // list of receivers
    subject: CONFIG.get('email.subject'), // Subject line
    html: htmlBody, // html body
  });
};

// Texts body (string) to recipient (valid phone number)
sendText = (recipient, body) => {
  if (!recipient) {
    console.log(
      'Text message could not be sent because the user has no phone number.',
    );
    return;
  }
  twilioClient.messages
    .create({
      body,
      from: CONFIG.get('twilio.number'),
      to: recipient,
    })
    .then(message => console.log(message.sid));
};

// Places given entry into correct digest queue or immediatly sends notifications.
exports.addEntryToQueues = entry => {
  return new Promise((resolve, reject) => {
    let entryId = entry._id;
    delete entry._id;
    const curEntry = new CurrentEntry(entry); // Create current entry
    entry._id = entryId;
    curEntry.save().then(currentEntry => {
      // Synchronize on the spot
      CurrentEntry.esSynchronize().then(() => {
        User.find()
          .populate('sharedSubs')
          .then(users => {
            // Loop through all users
            let iterateUsers = users.map(user => {
              return new Promise((resolve, reject) => {
                let matchingSubs = [];
                // Loop through all of the users subscriptions
                let allSubs = [...user.subs, ...user.sharedSubs];
                console.log(allSubs);
                let iterateSubs = allSubs.map(search => {
                  return new Promise((resolve, reject) => {
                    CurrentEntry.esSearch(search.query)
                      .then(results => {
                        // Add the subscription to list if there are results
                        if (results.hits.hits.length) {
                          matchingSubs.push(search);
                        }
                        resolve();
                      })
                      .catch(err => {
                        console.log(err);
                      });
                  });
                });
                Promise.all(iterateSubs).then(() => {
                  let immediateQueue = [];
                  // Place the entry into appropriate queues
                  for (let match of matchingSubs) {
                    if (match.freq === 'Immediate') {
                      immediateQueue.push({
                        subName: match.name,
                        subType: match.type,
                        subIsShared: match.author ? true : false,
                      });
                    } else if (match.freq === 'Daily') {
                      user.queues.daily.push({
                        subName: match.name,
                        subId: match._id,
                        subIsShared: match.author ? true : false,
                        entry: entry._id,
                      });
                    } else if (match.freq === 'Weekly') {
                      user.queues.weekly.push({
                        subName: match.name,
                        subId: match._id,
                        subIsShared: match.author ? true : false,
                        entry: entry._id,
                      });
                    }
                  }
                  if (immediateQueue) {
                    let grouped = groupByType(immediateQueue);
                    console.log(grouped);
                    if (grouped.email) {
                      if (grouped.email.length > 1)
                        sendImmediate(user, { name: '', type: 'email' }, entry);
                      else sendImmediate(user, grouped.email[0], entry);
                    }
                    if (grouped.text) {
                      if (grouped.text.length > 1)
                        sendImmediate(user, { name: '', type: 'text' }, entry);
                      else sendImmediate(user, grouped.text[0], entry);
                    }
                  }
                  user.save();
                  resolve();
                });
              });
            });
            Promise.all(iterateUsers).then(() => {
              mongoose.set('useFindAndModify', false); //fix deprecation warning
              CurrentEntry.findByIdAndRemove(currentEntry._id).then(removed => {
                console.log(removed);
                resolve();
              });
            });
          });
      });
    });
  });
};

sendImmediate = (user, sub, entry) => {
  if (sub.subType === 'email') {
    let htmlBody = [];
    htmlBody.push(`<h2>D-Sheet Notification</h2><hr />`);
    htmlBody.push(
      sub.subName
        ? `<h3>From ${sub.subIsShared ? 'shared ' : ''} subscription '${
            sub.subName
          }':</h3>`
        : `<h3>From multiple subscriptions:</h3>`,
    );
    htmlBody.push(formatEntry(entry));
    htmlBody = htmlBody.join('');
    sendEmail(user.email, htmlBody);
  } else if (sub.subType === 'text') {
    let url = `${CONFIG.get('root_url')}single/${entry._id}`;
    let body = sub.subName
      ? `New D-Sheet from your ${
          sub.subIsShared ? 'shared ' : ''
        }subscription '${sub.subName}', view here: ${url}`
      : `New D-Sheet from multiple subscriptions, view here: ${url}`;
    sendText(user.phoneNumber, body);
  }
};
