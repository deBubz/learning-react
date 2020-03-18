const router = require('express').Router();
let Exercises = require('../model/exercise.model');


// GET all
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

// GET by id
router.route('/:id').get((req, res) => {
    Exercises.findById(req.params.id)
        .then(ex => res.json(ex))
        .catch(err => res.status(400).json('Error: ' + err));
})


// DELETE by id
router.route('/:id').delete((req, res) => {
    Exercises.findById(req.params.id)
        .then(ex => res.json(ex))
        .catch(err => res.status(400).json('Error: ' + err));
})

// UPDATE by id
router.route('/update/:id').post((req, res) => {
    Exercises.findById(req.params.id)
        .then(ex => {
            ex.username = req.body.username;
            ex.description = req.body.description;
            ex.duration = Number(req.body.duration);
            ex.date = Date.parse(req.body.date);

            ex.save()
                .then(() => res.json('Exercise updated'))
                .catch(err => res.status(400).json('Error :' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;