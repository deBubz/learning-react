/* middleware checking recieved JWT in request is valid
before allowing access to API */

const expressJWT = require('express-jwt');
const config = require('config.json'); // basicly your env

module.exports = jwt;

function jwt() {
    const { secret } = config;

    // check token 
    // if request not from /users/authenticate
    return expressJWT({
        secret,
        algorithms: ['HS256']
    })
    .unless({
        path: [
            // public route doesnt need auth
            '/users/authenticate'
        ]
    });
}