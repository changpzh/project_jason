'use strict';

var express = require('express');
var router = express.Router();
var async = require('async');
var _ = require('lodash');
var moment = require('moment');
var db = require('../../settings').DB;
var pcipromotion = db.collection('pci_promotion');

router.get('/get', function(req, res, next) {
    //var bl = req.query.bl;
    //var product = req.query.bl;
    //var branch = req.query.bl;
    //"LTE-N;tdd-macro;tl16"


    pcipromotion.find({bl: "lte-n"}, {limit:50, sort: [['timestamp',-1]]}).toArray(function(err, results){
        if (err) return next(err);
        console.log("zhouzhou");
        console.log("%j", results);

        res.send(results);
    });
});

module.exports = router;