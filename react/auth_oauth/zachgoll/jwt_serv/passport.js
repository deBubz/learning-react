const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('./user.model');




const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    secretOrKey: process.env.SECERET,
};


passport.use(
    new JwtStrategy((jwtPayload, done) => {
        // if we're here jwt is valid
        User.findOne({ _id: jwtPayload.sub }, (err, user) => {
            if (err) return done(err, false);
            if (user) return done(null, user);
            else return done(null, false);
        });
    })
);
