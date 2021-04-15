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

const User = require("./user");

// express
const app = express();
require("dotenv").config();

console.log(process.env.MONGO_URI);

// mongoose connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("mongodb connected");
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
// app.use(cors());
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

// cookie parser
app.use(cookieParser("secret")); // use the same secret in express-session

// using passport
app.use(passport.initialize());
// using passport session
app.use(passport.session());
// using passport config
require("./passportConf")(passport);

// simple routes
app.post("/login", (req, res, next) => {
    console.log("login", req.body);
    // using local strategy
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No user exist");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("authenticated");
                console.log(req.user);
            });
        }
    })(req, res, next);
});

app.post("/register", (req, res) => {
    console.log(req.body);
    // res.send("hello");
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User existed");
        if (!doc) {
            const hash = await bcryptjs.hash(req.body.password, 10);
            console.log("done hash");
            const newUser = new User({
                username: req.body.username,
                password: hash,
            });
            await newUser.save();
            console.log("user created");
            res.status(200).json("user created");
        }
    });
});

// request not working, need review
app.get("/user", (req, res) => {
    res.send(req.user);
});

// start
app.listen(4000, () => {
    console.log(`Starting Server at 4000`);
});
