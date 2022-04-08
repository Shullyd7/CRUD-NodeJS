//importing ...
var mongoose = require('mongoose');
var express = require('express'); 
var router = express.Router();
var UserModel = require('./user')


//Set up default mongoose connection

var query ='mongodb://127.0.0.1/Backend';
  
const db = (query);
mongoose.Promise = global.Promise;
  
mongoose.connect(db, { useNewUrlParser : true, 
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});
  
module.exports = router;


//CRUD Operations

//CREATE
router.get('/save', function(req, res) {
    UserModel.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

//READ
router.get('/findall', function(req, res) {
    UserModel.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 });

 //UPDATE
 router.post('/update', function(req, res) {
    UserModel.findByIdAndUpdate(req.body.id, 
    {Name:req.body.Name}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});

//DELETE
router.get('/delete', function(req, res) {
    UserModel.remove(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});