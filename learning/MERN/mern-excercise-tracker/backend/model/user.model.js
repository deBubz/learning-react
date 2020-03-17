const mongoose = require('mongoose');

// use mongoose schema
const Schema = mongoose.Schema;

// user schema definition
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamp:true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;