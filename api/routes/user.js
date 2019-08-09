const express = require('express');
const jwt = require('jsonwebtoken');
const CONFIG = require('config');
const request = require('request');

const router = express.Router();

router.get('/', (req, res) => {
  const { user } = req;
  res.status(200).send(user);
});

module.exports = router;
