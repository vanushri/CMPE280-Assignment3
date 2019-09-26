var express = require('express');
var router = express.Router();
var ctrlHomeView = require("../controllers/homeView");
//var ctrlLogin = require("../controllers/login");

//router.get('/', ctrlLogin.logged_in, ctrlHome.get_home);

router.get('/', ctrlHomeView.get_homeView);

module.exports = router;
