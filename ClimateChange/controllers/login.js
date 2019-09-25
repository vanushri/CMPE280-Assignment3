var express = require('express');
var router = express.Router();

userMap = new Map();
currUser ='';


router.get('/', function(req, res, next) {
	res.render('login', { title: 'Express' });
});

/* LOGIN PAGE IN HTML */
/*
router.get('/', function(req,res) {
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
		messages.message2 = "User registered successfully";
	}
	res.render(__dirname + '/../public/html/login.html', messages);
});

router.post('/register', function(req,res) {
	var userName = req.body.user;
	var password = req.body.password;
	console.log("User Name: " + userName);
	console.log("Password: " + password);
	console.log(req.body);
	
	if(userMap.has(userName)){
		// loginerr=2 : User already registered
		return res.redirect('/login?loginerr=2');
	}
	userMap.set(userName, password);
	console.log("Map size is now " + userMap.size);
	//registered=1 : User registered successfully
	return res.redirect('/login?registered=1');
});

router.post('/signin', function(req, res){
	
	var userName = req.body.user;
	var password = req.body.password;

	console.log("User exists? " + userMap.has(userName));
	console.log("Password: " + userMap.get(userName));
	console.log("Password matches?: " + (password == userMap.get(userName)));
	
	if (userMap.has(userName) && password == userMap.get(userName)) {
		currUser = userName;
		return res.redirect('/home');
	}
	
	// loginerr=1 : Incorrect username and password
	return res.redirect('/login?loginerr=1');
});
*/

module.exports = router;
