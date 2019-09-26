var express = require('express');
var router = express.Router();
var ctrlHome = require("../controllers/home");
var ctrlLogin = require("../controllers/login");

router.get('/', ctrlLogin.logged_in, ctrlHome.get_home);

//router.get('/', ctrlHome.get_home);

module.exports = router;
