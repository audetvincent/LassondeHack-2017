var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Event = require("../event.js");
mongoose.connect('mongodb://cabby:test123@ds053798.mlab.com:53798/hackatown');

/* GET home page. */
router.get('/', function(req, res, next) {
    Event.find({}, function(err, users) {
        if(err) throw err;
        res.status(200).send(users);
    });
});

router.get('/events', function(req, res, next) {
    var startDate = req.query.startDate;
    var endDate = req.query.endDate;
    // Vérifier end date pour les null
    Event.find({
        $and: [ startDate : {$gt: startDate},
        endDate : {$lt: endDate}]
    }, function(err, results) {
        if(err) throw err;
        console.log(results);
        res.status(200).send(results);
    })
});

module.exports = router;
