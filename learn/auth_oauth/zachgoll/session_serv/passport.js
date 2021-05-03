const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const UserModel = require('./user.model');

/**
 * @param {*} password - The plain text password
 * @param {*} hash - The hash stored in the database
 * @param {*} salt - The salt stored in the database
 *
 * This function uses the crypto library to decrypt the hash using the salt and then compares
 * the decrypted hash/salt with the password that the user provided at login
 */
const validPassword = (password, hash, salt) => {
    const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512'.toString('hex'));
    return hash === verifyHash;
};

/**
 *
 * @param {*} password - The password string that the user inputs to the password field in the register form
 *
 * This function takes a plain text password and creates a salt and hash out of it.  Instead of storing the plaintext
 * password in the database, the salt and hash are stored for security
 *
 * ALTERNATIVE: It would also be acceptable to just use a hashing algorithm to make a hash of the plain text password.
 * You would then store the hashed password in the database and then re-hash it to verify later (similar to what we do here)
 */
const genPassword = (password) => {
    const salt = crypto.randomBytes(32).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512'.toString('hex'));

    return { salt, hash };
};

/**
 * this is called when `passport.authenticate()` is called
 *
 * if the user is validated, a call back is called with the user object
 * cb(null, user)
 *
 * the user object is then serialized with `passport.serializeUser()`
 * and added to the req.session.passport
 */
passport.use(
    new localStrategy((username, password, cb) => {
        UserModel.findOne({ username: username })
            .then((user) => {
                // no user found
                // null - err value | false - user value
                if (!user) return cb(null, false);

                // check password
                const isValid = validPassword(password, user.hash, user.salt);

                if (isValid) return cb(null, user);
                else return cb(null, false);
            })
            .catch((err) => cb(err));
    })
);

/**
 * instead of storing the whole user object, we only need to store the dbID for the user
 * then deserialize the user to get the ID to look the user up in the DB
 */
passport.serializeUser((user, cb) => {
    cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
    UserModel.findByID(id, (err, user) => {
        if (err) return cb(err);
        cb(null, user);
    });
});

/**
 * with all passport auth strategies, you will need to supply it with a callback
 * that will be executed when calling `passport.authenticate()`
 *
 * e.g the following login route
 */

/*
app.post(
    '/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    (err, req, res, next) => {
        if (err) next(err);
        console.log('You are logged in!');
    }
);
*/

/**
 * When the user submit credentials, passport.authenticate() (middleware)
 * will execute the cb and supply it with username and password from POST request
 *
 * passport.authenticate() takes 2 params
 * - name of the strategy
 * - options
 *
 * for now default is 'local' but changeable as so
 * passport.use('name', new Strategy())
 *
 * app.post('/route', passport.authenticate('name', ...))
 */

/**
 * passport.authenticate() will execute the callback in
 * new LocalStrategy()
 *
 * and if it is successful it will call next()
 * if not it will redirect to login route again
 */
