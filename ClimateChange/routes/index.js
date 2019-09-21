var express = require('express');
var router = express.Router();
var path = require('path');
//var ctrlLogin = require("../controllers/login");


userMap = new Map();

/* LANDING PAGE IN HTML */
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/../public/html/index.html'));
});


/* LOGIN PAGE IN HTML */
router.get('/login', function(req,res) {
	var messages = {
			message1: "",
			message2: "",
	}
	if (req.param('loginerr') == 1) {
		messages.message1 = "Incorrect username or password";
	}
	if (req.param('loginerr') == 2) {
		messages.message2 = "User already present";
	}
	if (req.param('registered') == 1) {
		messages.message2 = "User registered";
	}
	res.render(__dirname + '/../public/html/login.html', messages);
});

router.post('/login', function(req,res) {
	var userName = req.body.user;
	var password = req.body.password;
	console.log("User Name: " + userName);
	console.log("Password: " + password);
	console.log(req.body);
	
	if(userMap.has(userName)){
		// loginerr=2 : User already registered
		res.redirect('/login?loginerr=2');
	}
	userMap.set(userName, password);
	console.log("Map size is now " + userMap.size);
	//registered=1 : User already present
	res.redirect('/login?registered=1');
});

module.exports = router;
