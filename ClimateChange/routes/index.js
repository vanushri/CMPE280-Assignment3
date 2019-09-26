var express = require('express');
var router = express.Router();
var ctrlIndex = require("../controllers/index");


router.get('/', ctrlIndex.get_index);

module.exports = router;
