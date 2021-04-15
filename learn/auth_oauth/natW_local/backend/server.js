const express = require("express");
// const bodyParser = require("body-parser");   // deprecated - use express instead
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookie = require("cookie-parser");
const bcryptjs = require("bcryptjs");
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

// express
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(
    cors({
        origin: "http://localhost:3000", // location of the react app
        credentials: true,
    })
);

// session, check session secret key??
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);

// simple routes
app.post("/login", (req, res) => {
    console.log("loggin");
});

app.post("/register", (req, res) => {
    console.log("register");
});

app.post("/user", (req, res) => {
    console.log("user");
});

// cookie parser
app.use(cookieParser("secret")); // use the same secret in express-session

// start
app.listen(4000, () => {
    console.log(`Starting Server`);
});
