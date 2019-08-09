const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const CONFIG = require('config');
const request = require('request');

const { User } = require('../models/user.model');

// If (user exists in db), return user; else, return new user
// Get info needed from api
// If user has no email, return error
const handleUser = user => {
  return new Promise(async (resolve, reject) => {
    let found = await User.findOne({ personId: user.personId });
    let dbUser;
    if (found) {
      dbUser = found;
    } else {
      dbUser = new User({ personId: user.personId });
    }
    const options = {
      method: 'GET',
      url: `${CONFIG.get('api.v1.url')}people/${dbUser.personId}/full?`,
      json: {},
      timeout: 3 * 1000,
    };
    request(options, async (err, response, body) => {
      if (err) {
        reject(err);
      } else {
        dbUser.name = body.person.displayName;
        dbUser.email = body.person.email;
        if (!dbUser.email) {
          reject({ msg: 'No email associated with this user' });
        }
        //If you need to set admin upon log in
        //dbUser.roles = ['ADMIN'];
        await dbUser.save();
        resolve(dbUser);
      }
    });
  });
};

/* POST login. */
router.post('/login', (req, res) => {
  passport.authenticate('local', { session: false }, (error, user, info) => {
    console.log(`${error} and ${user}`);
    if (error || !user) {
      res.status(400).send({ msg: info });
    } else {
      req.login(user, { session: false }, async error => {
        if (error) {
          res.status(400).send({ error });
        }
        handleUser(user)
          .then(dbUser => {
            const token = jwt.sign(
              dbUser.toObject(),
              CONFIG.get('jwt.secret'),
              {
                expiresIn: '3h',
              },
            );
            res.cookie('jwt', token, { httpOnly: true });
            res.status(200).send(user);
          })
          .catch(err => {
            res.status(409).send(err);
          });
      });
    }
  })(req, res);
});

router.get('/logout', (req, res) => {
  res.clearCookie('jwt', { httpOnly: true });
  res.status(200).send({ authStatus: 'invalid' });
});

router.get('/check', (req, res) => {
  let authStatus;
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, CONFIG.get('jwt.secret'), err => {
      if (err) {
        authStatus = 'expired';
      } else {
        authStatus = 'valid';
      }
    });
  } else {
    authStatus = 'invalid';
  }
  res.status(200).send({ authStatus });
});

module.exports = router;
