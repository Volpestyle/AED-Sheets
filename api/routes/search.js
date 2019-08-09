const express = require('express');
const router = express.Router();
const Entry = require('../models/entry.model').Entry;
const CONFIG = require('config');

router.post('/', (req, res) => {
  Entry.esSearch(req.body.query, { hydrate: true })
    .then(response => {
      const count = response.hits.total;
      const results = response.hits.hits.map(({ doc }) => doc);
      res.send({ results, count, query: req.body.query });
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(304);
    });
});

module.exports = router;
