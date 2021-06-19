const router = require('express').Router();

router.get('/profile', (req, res, next) => {
    res.json({
        msg: 'made it to secure route',
        user: req.user,
        token: req.query.secret_token,
    });
});

module.exports = router;
