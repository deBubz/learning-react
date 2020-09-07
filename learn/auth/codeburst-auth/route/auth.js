const router = require("express").Router();

// import model
const User = require("../model/User");
const { registerValidation } = require("../validation");
const Joi = require("joi");

// register path
router.post("/register", async (req, res) => {
    // field requiremens
    const { error } = registerValidation(req.body);
    if(error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    // check existing email
    const isEmailExist = await user.findOne({ email: req.body.email });
    if(isEmailExist) {
        return res.status(400).json({ error: "Email already exists" });
    }

    // user model object
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
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

module.exports = router;