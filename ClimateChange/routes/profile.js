var express = require('express');
var router = express.Router();
var ctrlProfile = require("../controllers/profile");
var ctrlLogin = require("../controllers/login");

router.get('/', ctrlLogin.logged_in, ctrlProfile.get_profile);

module.exports = router;