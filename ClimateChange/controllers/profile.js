module.exports.get_profile = function(req, res, next)
{
    res.render('profile', {userName : req.session.userName});
};
