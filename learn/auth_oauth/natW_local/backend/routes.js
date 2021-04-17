const router = require("express").Router();
const User = require("./user");
const bcryptjs = require("bcryptjs");
const passport = require("passport");

// simple routes
router.post("/login", (req, res, next) => {
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

router.post("/register", (req, res) => {
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
router.get("/user", (req, res) => {
    console.log(req.user);
    res.send(req.user);
});

module.exports = router;
