const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// import model
const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");
const { valid, required } = require("joi");

// register path
router.post("/register", async (req, res) => {
    // field requiremens
    const { error } = registerValidation(req.body);
    if(error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    // check existing email
    const isEmailExist = await User.findOne({ email: req.body.email });
    if(isEmailExist) {
        return res.status(400).json({ error: "Email already exists" });
    }

    // password hashing
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    // user model object
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password,
    });

    // try catch save
    try {
        const savedUser = await user.save();
        res.json({ eror: null, data: savedUser });

        console.log("new account created");
    } catch(error) {
        res.status(400).json({error});
    }
});

// login path
router.post("/login", async (req, res) => {
    // validate user
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    // check matching email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ error: "WRONG EMAIL" });
    }

    // check password
    const validatePassword = await bcrypt.compare(req.body.password, user.password);
    if(!validatePassword) {
        return res.status(400).json({ error: "WRONG PASSWORD" });
    }

    const token = jwt.sign({
        name: user.name,
        id: user._id,
        }, process.env.TOKEN_SECRET
    );

    res.json({
        error: null,
        data: {
            token,
            message: "YOURE IN",
        }
    })
})

module.exports = router;