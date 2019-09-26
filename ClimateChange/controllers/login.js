var userMap = new Map();

module.exports.get_login = function(req, res, next)
{
	res.render('login');
};

module.exports.post_signin = function(req, res, next)
{
	var userName = req.body.user;
	var password = req.body.password;

	console.log("User exists? " + userMap.has(userName));
	console.log("Password: " + userMap.get(userName));
	console.log("Password matches?: " + (password == userMap.get(userName)));
	
	if (userMap.has(userName) && password == userMap.get(userName)) {
		req.session.userName = userName;
		console.log("going home");
		res.render('home', {userName : userName});
	}
	else {
		console.log("going in else");
		res.render('login', {loginMsg : 'Incorrect User Name or Password !'});
	}
};

module.exports.post_register = function(req, res, next)
{
	var userName = req.body.user;
	var password = req.body.password;
	console.log("User Name: " + userName);
	console.log("Password: " + password);
	
	if(userMap.has(userName)){
		res.render('login', {registerMsg : 'User Name already exists !'});
	}
	else {
		userMap.set(userName, password);
		console.log("Map size is now " + userMap.size);
		res.render('login', {registerMsg : 'User successfully registered ! You can log in now'});
	}
};

module.exports.logged_in = function(req, res, next)
{
	if(req.session.userName) {
		console.log("User Name in session: " + req.session.userName);
		next();
	}
	else {
		console.log("NOT LOGGED IN");
		res.render('login', {registerMsg : 'Please log in !'});
	}
	
};

/*
var express = require('express');
var router = express.Router();

userMap = new Map();
currUser ='';
var sess;


router.get('/', function(req, res, next) {
	//sess=req.session;
	res.render('login', { title: 'Express' });
});

router.post('/register', function(req,res) {
	var userName = req.body.user;
	var password = req.body.password;
	console.log("User Name: " + userName);
	console.log("Password: " + password);
	console.log(req.body);
	
	if(userMap.has(userName)){
		// loginerr=2 : User already registered
		//return res.redirect('/login?loginerr=2');
		return;
	}
	userMap.set(userName, password);
	console.log("Map size is now " + userMap.size);
	//registered=1 : User registered successfully
	//return res.redirect('/login?registered=1');
	return;
});

router.post('/signin', function(req, res){
	
	var userName = req.body.user;
	var password = req.body.password;

	console.log("User exists? " + userMap.has(userName));
	console.log("Password: " + userMap.get(userName));
	console.log("Password matches?: " + (password == userMap.get(userName)));
	
	if (userMap.has(userName) && password == userMap.get(userName)) {
		currUser = userName;
		//return res.redirect('/home');
		res.render('home');
	}
	
	// loginerr=1 : Incorrect username and password
	//return res.redirect('/login?loginerr=1');
	res.render('login');
});


/* LOGIN PAGE IN HTML */
/*
router.get('/signin', function(req,res) {
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


module.exports = router;
*/
