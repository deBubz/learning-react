const User = require("./user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
    // define local strategy to use
    passport.use(
        new localStrategy((username, password, done) => {
            // done is same as next()
            User.findOne({ username: username }, (err, user) => {
                if (err) throw err;
                if (!user) return done(null, false);
                if (user) {
                    bcrypt.compare(password, user.password, (err, result) => {
                        if (err) throw err;
                        if (result) return done(null, user);
                        else return done(null, false);
                    });
                }
            });
        })
    );

    // serialize user for browser cookies
    passport.serializeUser((user, cb) => {
        // cookie containing user id
        cb(null, user.id);
    });

    // de serialize user
    passport.deserializeUser((id, cb) => {
        User.findOne({ _id: id }, (err, user) => {
            const userInfo = { username: user.username };
            cb(err, userInfo);
        });
    });
};
