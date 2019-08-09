const LookupValue = require('../models/lookupValue.model');
const mongoose = require('mongoose');

exports.getValues = (req, res) => {
  LookupValue.find()
    .then(vals => {
      res.send(vals);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ error: err });
    });
};

exports.addValue = (req, res) => {
  let val = new LookupValue(req.body);
  val
    .save()
    .then(saved => {
      res.send(saved);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ error: err });
    });
};

exports.updateValue = (req, res) => {
  mongoose.set('useFindAndModify', false); //fix deprecation warning

  LookupValue.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updated => {
      res.send(updated);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ error: err });
    });
};

exports.deleteValue = (req, res) => {
  mongoose.set('useFindAndModify', false); //fix deprecation warning

  LookupValue.findByIdAndRemove(req.params.id)
    .then(deleted => {
      res.send(deleted);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ error: err });
    });
};
