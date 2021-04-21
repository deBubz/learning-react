const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const jwtStrategy = require('passport-jwt').Strategy;
const jwtExtract = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/user.model');

// configuring passport middleware

// signup middleware for signing up
// send user information to next middleware if successful
passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            try {
                const user = await UserModel.create({ email, password });
                console.log('cheese');
                console.log(user);

                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);

// passport middleware to handle user login

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            try {
                // get user
                const user = await UserModel.findOne({ email });
                if (!user) return done(null, false, { msg: 'User not found' });

                // check password
                const validate = await user.isValidPassword(password);
                if (!validate)
                    return done(null, false, { msg: 'Wrong Password' });

                // everything OK
                return done(null, user, { msg: 'Logged in Successfully' });
            } catch (error) {
                done(error);
            }
        }
    )
);

// extract jwt from query parameter
passport.use(
    new jwtStrategy(
        {
            secretOrKey: 'TOP_SECRET',
            jwtFromRequest: jwtExtract.fromUrlQueryParameter('secret_token'),
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                return done(error);
            }
        }
    )
);
