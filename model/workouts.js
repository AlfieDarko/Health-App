const mongoose = require('mongoose') ;
const Schema = mongoose.Schema;

//create new instance of mongoose.
const WorkoutSchema = new Schema({

name: {
  type: String,
  required: true
},
description: {
  type: String,
  required: true
},
bodypart: {
  type: String
},
imageURL: {
  type: String
},
dateCreated: {
  type : Date,
  default: Date.now
}

});

module.exports = mongoose.model("Workout", WorkoutSchema);
