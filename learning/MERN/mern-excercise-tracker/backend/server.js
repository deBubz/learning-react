const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// get binaries from dotenv
require('dotenv').config();

// create express server
const app = express();
const port = process.env.PORT || 8080;

// middleware
app.use(cors());            // middle ware
app.use(express.json());    // parse json

// database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("mongodb connection successfully established")
});

// adding crud routes files
const exRouter = require('./routes/exercises');
const userRouter = require('./routes/users');
// routing
app.use('/exercises', exRouter);
app.use('/users', userRouter);

// start
app.listen(port, () => {
    console.log(`Serv running on port: ${port}`);
})