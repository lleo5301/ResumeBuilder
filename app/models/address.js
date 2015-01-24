//app/models/resume.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var Skills = new Schema({
//    List = [String]
// });
var Address = new Schema({
  lineOne: String,
  lineTwo: String,
  state: String,
  city: String,
  zip: Number
});



module.exports = mongoose.model('Address', ResumeSchema);
