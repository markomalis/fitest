// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

// create a schema
var exerciseLibSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    exercises: [exerciseSchema]
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var exercise = mongoose.model('exercise', exerciseSchema);
var exerciseLibrary = mongoose.model('exerciseLibrary', exerciseLibSchema)
// make this available to our Node applications
exports.exercise = exercise;
exports.exerciseLibrary = exerciseLibrary;

/*
rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
*/
