const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();
const app = express();

// database
mongoose.connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('database connected');
});

// load the models
require('./user.model');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use(require('./routes/'));

app.listen(4040, () => {
    console.log('server running on http://localhost:4040');
});
