const Entry = require('../models/entry.model').Entry;
const mongoose = require('mongoose');
const notifications = require('../scripts/notifications');
const serviceNow = require('../scripts/serviceNow');
const { createBucket } = require('mongoose-gridfs');

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Entry content empty.',
    });
  }
  // Create an Entry
  let newEntry = new Entry(req.body.entry);
  newEntry
    .save()
    .then(async entry => {
      console.log('Entry successfully saved');
      if (req.body.options.isLive) {
        await notifications.addEntryToQueues(entry.toObject());
        if (entry.serviceTicket) {
          await serviceNow.createTicket(entry).catch(err => {
            console.log(`there was error making a ticket: ${err}`);
          });
        }
      }
      res.send(entry);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Entry.',
      });
    });
};

exports.createMany = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'No entries',
    });
  }
  let saveAll = req.body.map(entry => {
    return new Promise((resolve, reject) => {
      let newEntry = new Entry(entry);
      newEntry
        .save()
        .then(saved => {
          resolve(saved);
        })
        .catch(err => {
          reject(err);
        });
    });
  });
  Promise.all(saveAll)
    .then(entries => {
      console.log('Entries successfully saved');
      res.send(entries);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the entries.',
      });
    });
};

exports.writeAttachment = (req, res) => {
  Entry.findById(req.params.id)
    .then(entry => {
      console.log(entry);
      entry.attachment = req.file;
      entry.save().then(saved => {
        res.send(saved);
      });
    })
    .catch(err => console.log(err));
};

exports.getAttachment = (req, res) => {
  Entry.findById(req.params.id).then(entry => {
    const bucket = createBucket();
    const readStream = bucket.readFile({ filename: entry.attachment.filename });
    res.set('Content-Type', entry.attachment.contentType);
    return readStream.pipe(res);
  });
};

// Retrieve and return all entries from the database.
exports.getAll = (req, res) => {
  Entry.find()
    .then(entries => {
      res.send(entries);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving entries.',
      });
    });
};

// Find a single entry with a entryId
exports.getOne = (req, res) => {
  Entry.findById(req.params.id)
    .then(entry => {
      if (!entry) {
        return res.status(404).send({
          message: 'Entry not found with id ' + req.params.id,
        });
      }
      res.send(entry);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Entry not found with id ' + req.params.id,
        });
      }
      return res.status(500).send({
        message: 'Error retrieving entry with id ' + req.params.id,
      });
    });
};

// Update an entry identified by the entryId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: 'Entry content can not be empty',
    });
  }
  // Find entry and update it with the request body
  Entry.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(entry => {
      if (!entry) {
        return res.status(404).send({
          message: 'Entry not found with id ' + req.params.id,
        });
      }
      res.send(entry);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Entry not found with id ' + req.params.id,
        });
      }
      return res.status(500).send({
        message: 'Error updating entry with id ' + req.params.id,
      });
    });
};

exports.flagAsDeleted = (req, res) => {
  Entry.findById(req.params.id).then(entry => {
    entry.isDeleted = true;
    entry.save().then(saved => {
      res.send(saved);
    });
  });
};

// Delete a entry with the specified entryId in the request
exports.delete = (req, res) => {
  mongoose.set('useFindAndModify', false); //fix deprecation warning
  Entry.findByIdAndRemove(req.params.id)
    .then(entry => {
      if (!entry) {
        return res.status(404).send({
          message: 'Entry not found with id ' + req.params.id,
        });
      }
      res.send(entry);
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Entry not found with id ' + req.params.id,
        });
      }
      return res.status(500).send({
        message: 'Could not delete entry with id ' + req.params.id,
      });
    });
};

exports.addNote = (req, res) => {
  const { author, content } = req.body;
  Entry.findById(req.params.id)
    .then(entry => {
      entry.notes.push({ author, content });
      entry.save().then(saved => {
        res.send(saved.notes);
      });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Entry not found with id ' + req.params.id,
        });
      }
      return res.status(500).send({
        message: 'Could not update entry with id ' + req.params.id,
      });
    });
};

exports.deleteNote = (req, res) => {
  console.log(req.params.noteId);
  Entry.findById(req.params.entryId)
    .then(entry => {
      entry.notes.pull(req.params.noteId);
      entry.save().then(saved => {
        res.send(saved.notes);
      });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Entry not found with id ' + req.params.id,
        });
      }
      return res.status(500).send({
        message: 'Could not update entry with id ' + req.params.id,
      });
    });
};

exports.getUniqueSubmitters = (req, res) => {
  Entry.find()
    .distinct('submittedBy')
    .then(names => {
      res.send(names);
    });
};
