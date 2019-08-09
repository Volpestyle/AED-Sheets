const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const client = new XMLHttpRequest();
const btoa = require('btoa');

//This is based on code from the current implementation.
//The commented code of what was sent me is below.
exports.createTicket = entry => {
  return new Promise((resolve, reject) => {
    let requestBody = `{"incident_state":"1","caller_id":"itdsheet@npr.org","u_customer":"${
      entry.submittedBy
    }","notify":"2","contact_type":"email","short_description":"${
      entry.entry
    }","opened_by":"${
      entry.submittedBy
    }","category":"","priority":"","comments":""}`;

    console.log(requestBody);

    client.open(
      'post',
      'https://nprdev.service-now.com/api/now/table/incident?sysparm_fields=caller_id%2Cshort_description%2Ccomments',
    );

    client.setRequestHeader('Accept', 'application/json');
    client.setRequestHeader('Content-Type', 'application/json');

    //Eg. UserName="admin", Password="admin" for this code sample.
    client.setRequestHeader(
      'Authorization',
      'Basic ' + btoa('admin' + ':' + 'admin'),
    );

    client.onreadystatechange = function() {
      if (client.readyState === client.DONE) {
        if (client.status === 201) {
          resolve(client.responseText);
        } else {
          reject(client.status);
        }
      }
    };

    client.send(requestBody);
  });
};

/*
var requestBody = "{\"incident_state\":\"1\",\"caller_id\":\"itdsheet@npr.org\",\"u_customer\":\"\",\"notify\":\"2\",\"contact_type\":\"email\",\"short_description\":\"\",\"opened_by\":\"\",\"category\":\"\",\"priority\":\"\",\"comments\":\"\"}";

var client = new XMLHttpRequest();
client.open("post", "https://nprdev.service-now.com/api/now/table/incident?sysparm_fields=caller_id%2Cshort_description%2Ccomments");

client.setRequestHeader('Accept', 'application/json');
client.setRequestHeader('Content-Type', 'application/json');

//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader('Authorization', 'Basic ' + btoa('admin' + ':' + 'admin'));

client.onreadystatechange = function () {
  if (this.readyState == this.DONE) {
    document.getElementById("response").innerHTML = this.status + this.response;
  }
};
client.send(requestBody);

// var rarray = email.recipients_array;
// for (var i = 0; i < rarray.length; i++) {
//    var recipient = rarray[i];
//    if(recipient=="aedsheet@npr.org"){
// gs.log("Create D-Sheet Incident - New Process");
//       current.comments = "received from: " + email.origemail + "\n\n" + email.body_text;
//       current.short_description = email.subject;
//       email.body_text.indexOf('Dalet') > -1
//
//       var sid = gs.createUser(email.from);
//
//       current.caller_id = sid;
//       current.u_customer = sid;
//       current.opened_by = sid;
//       current.category = "request";
//       current.incident_state = 1;
//       current.notify = 2;
//       current.contact_type = "email";
//
//       if (email.body.assign != undefined)
//         current.assigned_to = email.body.assign;
//
//       if(email.importance != undefined)
//         if(email.importance == "High")
//           current.priority = 1;
//
//       if (email.body.priority != undefined)
//         current.priority = email.body.priority;
//
//       if (email.body.category != undefined)
//         current.category = email.body.category;
//
//       current.insert();
//    }
// }
// }
*/
