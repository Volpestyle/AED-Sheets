const express = require('express');
const jwt = require('jsonwebtoken');
const CONFIG = require('config');
const request = require('request');

const router = express.Router();

// Use api v1 to get full person info
router.get('/info/:id', (req, res) => {
  const options = {
    method: 'GET',
    url: `${CONFIG.get('api.v1.url')}people/${req.params.id}/full?`,
    json: {},
    timeout: 3 * 1000,
  };
  request(options, (err, response, body) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(body);
    }
  });
});

router.get('/all/:top', (req, res) => {
  const options = {
    method: 'GET',
    url: `${CONFIG.get('api.v1.url')}people?top=${req.params.top}`,
    json: {},
    timeout: 3 * 1000,
  };
  request(options, (err, response, body) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(body);
    }
  });
});

module.exports = router;
