///boilerplate

//dependencies
var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rb');

//model
var Resume = require('./app/models/resume');

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
  res.sendFile('/views/index.html', {root: __dirname});
  //res.json({message:"This api works"});
  //res.send('hello world');
});

//resume route
router.route('/api/resumes')

    //create a resume
    .post(function(req, res){
      console.log("Post:");
      console.log(req.body);
      var resume = new Resume(req.body);
      // resume.Name = req.body.Name;
      // resume.Title = req.body.Title;
      // resume.Email = req.body.Email;
      // resume.Skills = req.body.Skills;


      //save to db
      resume.save(function(err){
        if(err)
              res.send(err);

          res.json({message:'Resume Created'});
      });
    })

      .get(function(req,res){
        Resume.find(function(err,resumes){
          if(err)
              //console.log(err);
              res.send(err);

            res.json(resumes);
        });
    });


///register routes
app.use('/', router);
app.use('/libs', express.static(_dirname + '/libs'));

//lets start the server
//=========================================================
app.listen(port);
console.log('Website on port : ' + port);
