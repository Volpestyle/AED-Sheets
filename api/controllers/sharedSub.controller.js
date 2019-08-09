const { User, SharedSub } = require('../models/user.model');
const userController = require('./user.controller');

exports.getAll = (req, res) => {
  let author = req.params.author;
  SharedSub.find(author ? { author } : {})
    .then(subs => {
      res.send(subs);
    })
    .catch(err => {
      res.status(200).send({ msg: 'None found' });
    });
};

exports.create = (req, res) => {
  let newSub = new SharedSub(req.body);

  newSub.save().then(sub => {
    res.send(sub);
  });
};

exports.delete = (req, res) => {
  SharedSub.findByIdAndRemove(req.params.id).then(sub => {
    console.log(sub._id);
    User.update(
      { sharedSubs: sub._id },
      { $pull: { sharedSubs: sub._id } },
      function(err, resp) {
        User.find().then(users => {
          let promises = users.map(user => {
            return new Promise((resolve, reject) => {
              userController.onSubRemove(user);
              user.save().then(() => {
                resolve();
              });
            });
          });
          Promise.all(promises).then(() => {
            res.send(sub);
          });
        });
      },
    );
  });
};
