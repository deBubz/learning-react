// const bodyParser = require("body-parser");   // deprecated - use express instead
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
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
app.use("/api", require("./routes"));

// start
app.listen(4040, () => {
    console.log(`Starting Server at 4000`);
});
