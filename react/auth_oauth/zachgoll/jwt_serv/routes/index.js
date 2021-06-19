const router = require('express').Router();

// use defined routes
router.use('/api', require('./users'));

module.exports = router;
