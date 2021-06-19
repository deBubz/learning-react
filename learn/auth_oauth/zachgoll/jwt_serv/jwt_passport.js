const JWTStrategy = require('passport-jwt').Strategy;
const extractJWT = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require('./user.model');

const SECRET = 'SECRET';

const options = {
    jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET,
};

// callback middleware
passport.use(
    new JWTStrategy(options, (payload, done) => {
        User.findOne({ _id: payload.sub }, (err, user) => {
            if (err) return done(err, false);
            if (user) return done(null, user);
            else return done(null, false);
        });
    })
);

/**
 * This code will
 * - grab the token from the request header in `Authorization`
 * - extract and parse the jwt
 * - passport-jwt will call verify from jsonwebtoken
 * - if successful passport will find the user from the database and attached it to the request object
 */
