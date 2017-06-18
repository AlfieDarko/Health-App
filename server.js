const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser') ;
const Workout = require('./model/workouts') ;
mongoose.Promise = global.Promise


var app = express();
var router = express.Router();

// Set Server listening port to 3001
var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://admin:secret91@ds129342.mlab.com:29342/healthwealth')
//Configures API to use bodyParser & look for JSON data in request bodyParser
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//To prevent errors from CORS, set out headers to allow CORS with middleware..

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
res.setHeader('Cache-Control', 'no-cache');
next();
})

//now we can set route path & initialize API
router.get('/', function(req, res){
  res.json({ message: 'API Initialized!'});
})

router.route('/workouts')
    //retrieve all workouts from database
    .get(function (req, res) {
      //looks at out WorkOut Schema
      Workout.find(function(err, workouts){
        if(err){
        res.send(err);
      }
      else
        // responds with a json object of our database comments
        res.json(workouts)
      });
    })

.post(function(req, res) {
  var workout = new Workout();
  //body parser lets us use the req.bodyParser
  workout.name = req.body.name;
  workout.description = req.body.description;
  workout.bodypart = req.body.bodypart;
  workout.imageURL = req.body.imageURL;


  workout.save(function(err) {
    if (err){
      res.send(err)
    }
    else
    res.json({ message: 'Comment successfully added!'});
  });
});

router.route('/workouts/:workout_id')
//put method gives chance to update comment based on id passed to route
.put(function(req, res){
  Workout.findById(req.params.workout_id, function(err, workout){
    if(err)
    res.send(err);
    //setting new params to whatever, if nothing changes, keep.
    // eslint-disable-next-line
    (req.body.name) ? workout.name = req.body.name : null; //
    // eslint-disable-next-line
    (req.body.description) ? workout.description = req.body.description : null;
    // eslint-disable-next-line
    (req.body.bodypart) ? workout.bodypart = req.body.bodypart : null;
    // eslint-disable-next-line
    (req.body.imageURL) ? workout.imageURL = req.body.imageURL : null;
    workout.save(function(err){
      if (err){
        res.send(err)
      }
      else
      res.json({message: 'Comment has been updated' });
    });
  });
})
.delete(function(req, res) {
  // selects comment by ID then removes
  Workout.remove({ _id: req.params.workout_id }, function(err, comment) {
    if(err)
      res.send(err);
    res.json({ message: 'Comment has been deleted' })
  })
});

app.use('/api', router);

// Use out router config when we call /api
app.listen(port, function(){
  console.log(`api running on port ${port}`);
})
