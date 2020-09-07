const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const PORT = 5000;

const app = express();
const URI = process.env.URI;

app.use(express.json());

// database
mongoose.connect(
    process.env.URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log("connected to db")
);

// =========================================================
//                        auth

const authRoutes = require("./route/auth");

app.use("/api/user", authRoutes);


app.listen(PORT, () => {
    console.log("server is running...")
});