var express = require('express');
var router = express.Router();
var ctrlLogin = require("../controllers/login");


router.get('/', ctrlLogin.get_login);

router.post('/signin', ctrlLogin.post_signin);

router.post('/register', ctrlLogin.post_register);

module.exports = router;
