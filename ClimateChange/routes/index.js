var express = require('express');
var router = express.Router();
var path = require('path');
//var ctrlLogin = require("../controllers/login");


userMap = new Map();

/* LANDING PAGE IN HTML */
router.get('/', function(req,res,next) {
	res.sendFile(path.join(__dirname+'/../public/html/index.html'));
});


/* LOGIN PAGE IN HTML */
router.get('/login', function(req,res) {
	
	res.sendFile(path.join(__dirname+'/../public/html/login.html'));
});

router.post('/login', function(req,res) {
	var userName = req.body.user;
	var password = req.body.password;
	console.log("User Name: " + userName);
	console.log("Password: " + password);
	console.log(req.body);
	
	userMap.set(userName, password);
	console.log("Map size is now " + userMap.size);
	
	res.redirect('/login');
});

module.exports = router;
