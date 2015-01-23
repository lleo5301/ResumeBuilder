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
    Skills: [String]

});

module.exports = mongoose.model('Resume', ResumeSchema);
