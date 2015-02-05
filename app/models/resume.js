//app/models/resume.js

var mongoose = require('mongoose');
//var Resume = require('./app/models/resume');
var Schema = mongoose.Schema;

// var Skills = new Schema({
//    List = [String]
// });


var Experience = new Schema({
    Name:String,
    Title:String,
    Address:{lineOne: String,
      lineTwo: String,
      state: String,
      city: String,
      zip: Number},
    Duties:[String]

});

var Education = new Schema({
    Degree:String,
    Name:String,
    location:String,
    Year:String
});

var ResumeSchema = new Schema({
    Name: String,
    Title: String,
    Email: String,
    Phone: Number,
    Address:{lineOne: String,
      lineTwo: String,
      state: String,
      city: String,
      zip: Number},
    Summary:String,
    Skills: [String],
    Experience:[Experience],
    Education:[Education]

});

module.exports = mongoose.model('Resume', ResumeSchema);
