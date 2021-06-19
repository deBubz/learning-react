// controller 
// set routes, set what those routes do
// set middleware for routes

const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticate);
router.get('/', getAll);

module.exports = router;

function authenticate(req, res, next) {
    // body has username, password
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);

    // this is seperated to handle errors here
}

function getAll(req, res, next) {
    // body has username, password
    userService.getAll()
        .then(user => res.json(user))
        .catch(next);

    // this is seperated to handle errors here
}



