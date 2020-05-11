// imports
const router = require('express').Router();
const Exercise = require('../model/exercise.model')

// /exercises/
// GET all 
router.route('/').get((req, res) => {
    Exercise.find()
        .then(ex => res.json(ex))
        .catch(err => res.status(400).json('Error ' + err));
});

// CREATE one exercise
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newEx = new Exercise({ username, description, duration, date });
    newEx.save()
        .then(() => res.json('New Exercise added'))
        .catch(err => res.status(400).json('Error: ' + err));
})

// GET by id
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(ex => res.json(ex))
        .catch(err => res.status(400).json('Error ' + err));
});


// DELETE by id
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(ex => res.json('Exercise Deleted'))
        .catch(err => res.status(400).json('Error ' + err));
});


// UPDATE by id
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(ex => {
            ex.username = req.body.username;
            ex.description = req.body.description;
            ex.duration = Number(req.body.duration);
            ex.date = Date.parse(req.body.date);

            ex.save()
                .then(() => res.json('Exercise updated'))
                .catch(err => err.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error ' + err));
});


// export
module.exports = router;