// import
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

// dotenv
require('dotenv').config();

// express server
const app = express();
const port = process.env.PORT || 8081;

// middleware
app.use(cors());
app.use(express.json());

// db connect
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB successfully established');
});

// // adding api routes
const exRouter = require('./routes/exercises');
const userRouter = require('./routes/users');
app.use('/users', userRouter);
app.use('/exercises', exRouter);

// start
app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
})