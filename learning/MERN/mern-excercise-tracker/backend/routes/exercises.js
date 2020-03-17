const router = require('express').Router();
let Exercises = require('../model/exercise.model');


// GET
router.route('/').get((req, res) => {
    Exercises.find()
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

// CREATE
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newEx = new Exercises({ username, description, duration, date, });

    newEx.save()
        .then(() => res.json("Ex added"))
        .catch(err => res.status(400).json('Error: ' + err));
});

//


module.exports = router;