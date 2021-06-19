const router = require('express').Router();
const mongoose = require('mongoose');
const utils = require('../lib/utils');
// weird way to do model
const UserModel = require('../user.model');

router.post('/login', (req, res, next) => {
    UserModel.findOne({ username: req.body.username })
        .then((user) => {
            if (!user) res.json({ success: false, msg: 'user not found' });

            const isValid = utils.validPassword(req.body.password, user.hash, user.salt);
            if (!isValid) res.json({ success: false, msg: 'wrong password' });
            else {
                const tokenObj = utils.signJwt(user);
                res.status(200).json({
                    success: true,
                    token: tokenObj.token,
                    expiresIn: tokenObj.expiresIn,
                });
            }
        })
        .catch((err) => next(err));
});

router.post('/register', (req, res) => {
    const saltHash = utils.genPassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new UserModel({
        username: req.body.username,
        hash,
        salt,
    });

    try {
        newUser.save().then((user) => {
            res.json({ success: true, user });
        });
    } catch (err) {
        res.json({ success: false, msg: err });
    }
});

module.exports = router;
