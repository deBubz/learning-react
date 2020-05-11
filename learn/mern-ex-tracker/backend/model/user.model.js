// mongoose model for exercise
const mongoose = require('mongoose');

// schema
const Schema = mongoose.Schema;

// schema definition
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: true,
        unique: true,
    }
}, {
    timestamps: true,
});

// bind and export
const User = mongoose.model('users', userSchema)
module.exports = User;