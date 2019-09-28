const allArticles = [
	{
		id:1,
		name:'Investors With $16 Trillion Want Deforestation Action',
		url:'https://www.bloomberg.com/news/articles/2019-09-18/investors-managing-16-trillion-demand-action-on-deforestation',
	},
	{
		id:2,
		name:'Brazilian Amazon fires scientifically linked to 2019 deforestation',
		url:'https://news.mongabay.com/2019/09/brazilian-amazon-fires-scientifically-linked-to-2019-deforestation-report/',
	},
]
		
	
module.exports.get_articles = function(req, res, next) {
	var query = req.query.query;
	if(!query){
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({articles: allArticles}));
	}
	else{
		var matches = allArticles.filter(function(article){
			return article.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
		});
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({articles: matches}));
	}	
};
