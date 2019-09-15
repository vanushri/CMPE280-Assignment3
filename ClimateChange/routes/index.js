var express = require('express');
var router = express.Router();
var path = require('path');
//var ctrlLogin = require("../controllers/login");

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});


//login page in html
router.get('/login', function(req,res) {
	res.sendFile(path.join(__dirname+'/../public/html/login.html'));
});

module.exports = router;
