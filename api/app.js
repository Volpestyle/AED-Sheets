const CONFIG = require('config');
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('./passport');

// Mongodb
const mongoose = require('mongoose');

mongoose
  .connect(CONFIG.get('mongodb.uri'), {
    useNewUrlParser: true,
  })
  .then(() => console.log('Connected successfully to database'))
  .catch(err => console.log(err));

const dbRouter = require('./routes/db');
const userRouter = require('./routes/user');
const usersInfoRouter = require('./routes/usersInfo');
const authRouter = require('./routes/auth');
const searchRouter = require('./routes/search');

const app = express();

app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/db', passport.authenticate('jwt', { session: false }), dbRouter);
app.use('/user', passport.authenticate('jwt', { session: false }), userRouter);
app.use('/users', usersInfoRouter);
app.use('/search', searchRouter);
app.use('/auth', authRouter);

// Passport
app.use(passport.initialize());

module.exports = app;
