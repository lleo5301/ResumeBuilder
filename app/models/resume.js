//app/models/resume.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResumeShcema = new schema({
    Name: String

});

module.exports = mongoose.model('Resume', ResumeSchema);
