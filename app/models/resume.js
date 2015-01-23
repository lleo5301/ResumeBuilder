//app/models/resume.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var Skills = new Schema({
//    List = [String]
// });

var ResumeSchema = new Schema({
    Name: String,
    Title: String,
    Email: String,
    Phone: Number,
    Address:{
      lineOne: String,
      lineTwo: String,
      state: String,
      city: String,
      zip: Number
    },
    Skills: [String]

});

module.exports = mongoose.model('Resume', ResumeSchema);
