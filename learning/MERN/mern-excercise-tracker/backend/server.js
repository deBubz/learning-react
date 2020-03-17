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

// start
app.listen(port, () => {
    console.log(`Serv running on port: ${port}`);
})