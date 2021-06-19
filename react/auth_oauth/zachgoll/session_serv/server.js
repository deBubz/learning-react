const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('./user.model');

// connect mongo is new?
const MongoStore = require('connect-mongo')(session);

/**
 *  general setup
 */

require('dotenv').config();
const app = express;

// json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Database setup
 */
const connection = mongoose.createConnection(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// missing connection?

/**
 * Session setup
 */
const sessionStore = new MongoStore({
    mongooseConnection: connection,
    collection: 'sessions',
});

/**
 * Express-session brief overview:
 * secret: random string to authenticate the session
 * resave: if true (force the session to save) session will be forced to change if nothing is changed
 * saveUninit: same as resave, force session save when not uninit
 */
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
        store: sessionStore,
    })
);

// integrate passport with express-session
// must always be after express session
app.use(passport.initialize());
app.use(passport.session());

/**
 * Routes
 */
const authRoute = require('./auth.route');
const passport = require('passport');

app.use('/api', authRoute);
