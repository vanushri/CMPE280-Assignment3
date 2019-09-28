var express = require('express');
var router = express.Router();
var ctrlIndex = require("../controllers/index");
var ctrlGraph = require("../controllers/graph");
var ctrlArticles = require("../controllers/articles");


router.get('/', ctrlIndex.get_index);

router.get('/graph', ctrlGraph.get_graphs);

router.get('/articles', ctrlArticles.get_articles);

module.exports = router;
