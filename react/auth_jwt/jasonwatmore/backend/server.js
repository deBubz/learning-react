// you know this
// theres some extra spicy stuff but not too different

require('rootpath')();  // just for require pathing
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT to secure API
app.use(jwt());

// setting routes
app.use('/users', require('./users/user.controller'));

// global error handler
app.use(errorHandler);

// running server
const port = process.env.NODE_ENV === 'production' ? 80: 4000;
const server = app.listen(port, () => {
    console.log('Listening on port: ' + port);
});