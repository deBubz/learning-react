const mongoose = require('mongoose');
const { stringify } = require('node:querystring');

// why is salt used here
const UserSchema = mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
});

const UserModel = mongoose.modelNames('session_user', UserSchema);
module.exports = UserModel;
