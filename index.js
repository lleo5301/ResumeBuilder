///boilerplate

//dependencies
var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rb');

//model
var Resume = require('./app/models/resume.js');

//configure body parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//set port
var port = process.env.PORT || 5300;

//set routes for the api
var router = express.Router();

//routes boilerplate
router.use(function(req,res,next){
  console.log('Working on it');
  //continue to remaining routes
  next();
});

//test
router.get('/', function(req, res){
  res.json({message:"This api works"});

});

//resume route
router.route('/resumes')

    //create a resume
    .post(function(req, res){
      var resume = new Resume();
      resume.name = req.body.name;

      //save to db
      resume.save(function(err){
        if(err)
          res.send(err);

          res.json({message:'Resume Created'});
      })

      .get(function(req,res){
        Resume.find(function(err,resumes){
          if(err)
            res.send(err);

            res.json(resumes);
        });
      })
    });





///register routes
app.use('/api', router);

//lets start the server
//=========================================================
app.listen(port);
console.log('Website on port : ' + port);
