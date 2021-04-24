const jwt = require('jsonwebtoken');

/**
 *
 * @param {Object} payload what you want to hide in a token
 * @returns signed token string
 */
const genAccessToken = (payload) => {
    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1000' });
};

/**
 *
 * @param {Response} res response object
 * @param {Request} req request object
 * @param {NextFunction} next next function middleware call
 */
const authenticateToken = (res, req, next) => {
    const header = res.headers['authorization'];
    const token = header && header.split(' ')[1];

    if (token === null) return res.status(401).json({ msg: 'missing token ' });

    // token, secret, callback
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err);

        if (err) return res.status(403).json({ msg: 'bad token' });

        // good token, pass middleware
        // set request user
        req.user = user;
        next();
    });
};

module.exports = { genAccessToken, authenticateToken };
