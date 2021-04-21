const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const UserModel = require('./models/user.model');

/** initial config ------------------------------------------------------------------------- */
const app = express();
require('dotenv').config();
app.use(express.urlencoded({ extended: false }));

/** mongodb connect ------------------------------------------------------------------------- */
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', () => console.log('mongodb connected'));
mongoose.Promise = global.Promise;
require('./auth/auth');

/** routes -------------------------------------------------------------------------------- */
const routes = require('./routes/routes');
const secureRoutes = require('./routes/secureRoutes');

app.use('/', routes);
app.use(
    '/user',
    passport.authenticate('jwt', { session: false }),
    secureRoutes
);

/** server -------------------------------------------------------------------------------- */
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(4000, () => {
    console.log('server started');
});
