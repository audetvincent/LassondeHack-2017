var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Event = require("../event.js");
mongoose.connect('mongodb://cabby:test123@ds053798.mlab.com:53798/hackatown');

/* GET home page. */
router.get('/', function(req, res, next) {
    Event.find({}, function(err, results) {
        if(err) throw err;
        res.status(200).send(results);
    });
});

router.get('/events', function(req, res, next) {
    var sDate = req.query.startDate;
    var endDate = req.query.endDate;
    Event.find({}, function(err, results) {
        if(err) throw err;
        res.status(200).send(results);
    });
});

module.exports = router;
