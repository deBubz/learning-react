/* catch all errors and remove the need for
redundant error handler in the alpp */

/* used in server.js */

module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if(typeof (err) === 'string') {
        // custom app error
        return res.status(400).json({ message: err });
    }

    if(err.name === 'UnauthorizedError') {
        // jwt auth error
        return res.status(401).json({ message: 'Invalid Token' });
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });
}