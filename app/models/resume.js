//app/models/resume.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResumeSchema = new Schema({
    Name: String

});

module.exports = mongoose.model('Resume', ResumeSchema);
