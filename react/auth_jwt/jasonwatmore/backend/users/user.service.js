/* 
contains:
- method for authenticating user credentials and return JWT token
- method for getting all users in the app

users are hardcoded
on success, JWT is generated and returned to the client app
JWT must be there in request to secure routes
*/

const jwt = require('jsonwebtoken');
const config = require('config.json'); 

const users = [
    { 
        id: 1, 
        username: "test", 
        password: "test", 
        name: 'Test' 
    },
];


module.exports = {
    authenticate,
    getAll
}
// to authenticate username/ password
async function authenticate ({ username, password }) {
    // find valid user
    console.log("yes");
    const user = users.find(
        u => u.username === username && u.password === password
    );
    if(!user) throw 'Username or Password is incorrect';

    const token = jwt.sign(
        { sub: user.id },       // payload
        config.secret,          // secret for token
        { expiresIn: '7d' },    // expiry time
    )

    return {
        ...omitPassword(user),
        token
    }
}

// get all users from array without password
async function getAll() {
    return users.map(u => omitPassword(u));
}

// helper functions
// remove password from user object
function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
}