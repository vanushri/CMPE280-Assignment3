module.exports.get_home = function(req, res, next)
{
	res.render('home', {userName : req.session.userName});
};
