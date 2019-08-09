const { User } = require('../models/user.model');
const mongoose = require('mongoose');

exports.getAll = (req, res) => {
  User.find().then(users => {
    res.send(users);
  });
};

exports.getOne = (req, res) => {
  User.findOne({ personId: parseInt(req.params.personId) })
    .populate('sharedSubs')
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

exports.getOneNoPopulate = (req, res) => {
  User.findOne({ personId: parseInt(req.params.personId) })
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

// If user exists, return user
// Else, return new user
exports.add = (req, res) => {
  User.findOne({ personId: parseInt(req.body.personId) }).then(user => {
    if (user) {
      res.send(user);
    } else {
      let newUser = new User(req.body);
      newUser.save().then(user => {
        res.send(user);
      });
    }
  });
};

exports.update = (req, res) => {
  mongoose.set('useFindAndModify', false); //fix deprecation warning
  User.findOneAndUpdate({ personId: parseInt(req.params.personId) }, req.body, {
    new: true,
  }).then(user => {
    res.send(user);
  });
};

exports.addSub = (req, res) => {
  User.findOne({ personId: parseInt(req.params.personId) }).then(user => {
    user.subs.push(req.body);
    user.save().then(user => {
      res.send(user.subs);
    });
  });
};

//Ensure there are no items in queues that belong to non existing subscription
//Mutates user
const onSubRemove = (exports.onSubRemove = user => {
  let subIds = [
    ...user.subs.map(sub => sub._id.toString()),
    ...user.sharedSubs.map(i => i.toString()),
  ];
  Object.keys(user.queues).forEach(key => {
    if (Array.isArray(user.queues[key])) {
      user.queues[key] = user.queues[key].filter(i => {
        return subIds.includes(i.subId.toString());
      });
    }
  });
});

exports.removeSub = (req, res) => {
  User.findOne({ personId: parseInt(req.params.personId) }).then(user => {
    let removed = user.subs.id(req.params.subId).remove();
    onSubRemove(user);
    user.save().then(user => {
      res.send(user.subs);
    });
  });
};

exports.addSharedSub = (req, res) => {
  User.findOne({ personId: parseInt(req.params.personId) }).then(user => {
    user.sharedSubs.push(req.body.subId);
    user.save().then(user => {
      user
        .populate('sharedSubs')
        .execPopulate()
        .then(() => {
          res.send(user.sharedSubs);
        });
    });
  });
};

exports.removeSharedSub = (req, res) => {
  User.findOne({ personId: parseInt(req.params.personId) }).then(user => {
    user.sharedSub;
    let removed = user.sharedSubs.remove(req.params.sharedSubId);
    onSubRemove(user);
    user.save().then(user => {
      user
        .populate('sharedSubs')
        .execPopulate()
        .then(() => {
          res.send(user.sharedSubs);
        });
    });
  });
};

exports.delete = (req, res) => {
  User.findOneAndRemove({ personId: parseInt(req.params.personId) })
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
