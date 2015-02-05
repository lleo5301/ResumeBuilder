///boilerplate

//dependencies
var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var pdf = require('phantomjs-pdf');
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

          res.json(resume);

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

///pdf-functions begin======== using routes
router.route('/api/topdf')
.post(function(req,res){
  var tempName= Math.floor((Math.random() * 1000) + 1).toString();
  var fileName="pdfs//"+tempName+".pdf";
  console.log(req.body);
  var options={
    html:req.body.data,
    css:'libs/bootstrap/css/bootstrap.css',
    js:'lisb/bootstrap/js/bootstrap.js'
  };

  pdf.convert(options, function(result){
  result.toFile(fileName);

  });
  console.log(req.body);
  //res.sendfile(fileName);
  });

//route to retrieve pdf
routers.route('/api/getpdf/:resume_id')
.get(function(req,res){
  console.log(req.params.resume_id);
});




///register routes
app.use('/', router);
app.use('/libs', express.static(__dirname + '/libs'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/views', express.static(__dirname + '/views'));


//lets start the server
//=========================================================
app.listen(port);
console.log('Website on port : ' + port);
