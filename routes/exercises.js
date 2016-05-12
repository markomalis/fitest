var express = require('express');
var router = express.Router();
var ReactDOMServer = require("react-dom/server");
var React = require("react");
var ExerciseModels = require('../models/exercise');
var exercise = ExerciseModels.exercise
var exerciseLibrary = ExerciseModels.exerciseLibrary;
var jsx = require("node-jsx").install({
  harmony: true,
  extension: ".jsx"
});
App = React.createFactory(require("../components/exerciseSearchList"));

var su_name = "Marko";

router.route('/')
    //get all exercises from main exerciseLib
    .get(function(req,res,next){
        exerciseLibrary.findOne({user: su_name}, function(err, lib){
            if (err) throw err;
            var html = ReactDOMServer.renderToString(App({data:lib.exercises}));
            //res.json(lib.exercises);
            res.render('index', { html: html });
        });
    })
    //post a new exercise to the main exerciseLib
    //TODO: function should only be available to superusers
    .post(function(req,res,next){
        console.log("in post");
        exerciseLibrary.find({user: su_name}, function(err, lib){
            if (err) throw err;
            lib.exercises.push(req.body);
            lib.save(function(err, lib){
                if (err) throw err;
                res.json(lib);
            });
        });
    });
    
router.route('/lib/:user_id')
    //get all exercises from exerciseLib of specified user
    .get(function(req,res,next){
        exerciseLibrary.findOne({user: req.params.user_id}, function(err, lib){
            if (err) throw err;
            res.json(lib);
        });
    })
    //add a new exerciseLib for specified user
    //TODO: function should only be available to owner of library
    .post(function(req,res,next){
        exerciseLibrary.create({user: req.params.user_id, exercises: []}, function(err, lib){
            if (err) throw err;
            res.json(lib);
        });
    })
    //add a new exercise to the exerciseLib for specified user
    .put(function(req,res,next){
        exerciseLibrary.findOne({user: req.params.user_id}, function(err, lib){
            if (err) throw err;
            lib.exercises.push(req.body);
            lib.save(function(err,lib){
                if (err) throw err;
                res.json(lib);
            });
        });
    });
    
router.route('/test')
    .get(function(req,res,next){
        res.json([{"test":"testGET"}]);
    })
    
    .post(function(req,res,next){
        res.json([{"test":"testPOST", "body":req.body.yolo}]);
    })    

module.exports = router;
