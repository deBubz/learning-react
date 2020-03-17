const mongoose = require('mongoose');

// use mongoose schema
const Schema = mongoosle.Schema;

// user schema definition
const exerciseSchema = new Schema({
    username: { type: String, required: true},
    description: { type: String, required: true},
    duration: { type: Number, required: true},
    date: { type: Date, required: true},
}, {
    timestamp:true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;