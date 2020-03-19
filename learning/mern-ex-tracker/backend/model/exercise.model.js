// mongoose model for exercise
const mongoose = require('mongoose');

// schema
const Schema = mongoose.Schema;

// schema definition
const exSchema = new Schema({
    username: { type:String, required:true },
    description: { type:String, required:true },
    duration: { type:Number, required:true },
    date: { type:Date, required:true }
}, {
    timestamps: true,
});

// bind and export
const Exercise = mongoose.model('exercises', exSchema)
module.exports = Exercise;