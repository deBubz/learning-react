const mongoose = require('mongoose');

// why is salt used here
const UserSchema = mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
});

// mongoose.model('jwt_user', UserSchema);
const UserModel = mongoose.model('jwt_user', UserSchema);

module.exports = UserModel;
