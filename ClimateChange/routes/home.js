var express = require('express');
var router = express.Router();
var path = require('path');
var ctrlLogin = require("../controllers/login");

//we can take either approach, you can comment the PUG code and open HTML or vice versa 

//Approach 1 : home page with HTML
//router.post('/', ctrlLogin.post_login);


//Approach 2 : home page with PUG
/*
router.post('/', function(req, res, next) {
	res.render('homeP', { title1: 'Hello vanu' });
});
*/

/*router.post('/', function(req, res, next) {
	res.render('homePage');
});*/


router.post('/', function(req,res){
	 // res.sendFile('public/html/homepage.html', { root : __dirname});
	  //__dirname : It will resolve to your project folder.
	  
	//res.sendFile( __dirname + "/../public/html/" + "homepage.html" );
	
	res.sendFile(path.join(__dirname + '/../public/html/homepage.html'));
});


module.exports = router;
