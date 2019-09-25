var express = require('express');
var router = express.Router();
var path = require('path');


/* LANDING PAGE IN HTML */
/*
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/../public/html/index.html'));
});*/

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

module.exports = router;
