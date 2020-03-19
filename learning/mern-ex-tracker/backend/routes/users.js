// import
const router = require('express').Router();
const User = require('../model/user.model')

// GET all users
router.route('/').get((req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

// CREATE one user
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('New User added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;