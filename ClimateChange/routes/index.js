var express = require('express');
var router = express.Router();
var path = require('path');
//var ctrlLogin = require("../controllers/login");

/* LANDING PAGE IN HTML */
router.get('/', function(req,res,next) {
	res.sendFile(path.join(__dirname+'/../public/html/index.html'));
});


/* LOGIN PAGE IN HTML */
router.get('/login', function(req,res) {
	res.sendFile(path.join(__dirname+'/../public/html/login.html'));
});

module.exports = router;
