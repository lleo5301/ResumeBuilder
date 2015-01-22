///boilerplate

//dependencies
var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rb');

//model
var Resume = require('./app/models/bear');

//configure body parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//set port
var port = process.env.PORT || 5300;

//set routes for the api
var router = express.Router();

//test
router.get('/', function(req, res){
  res.json({message:"This api works"});

});

//to-do add real routes


///register routes
app.use('/api', router);

//lets start the server
//=========================================================
app.listen(port);
console.log('Website on port : ' + port);
