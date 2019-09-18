module.exports.post_login = function(request, result){
	var text = 'Welcome, ' + getName(request);
	sendBody(text, result);
};


function getName(request){
	var userName = request.param('user');
	return userName;
}

function sendBody(text, result){
	var html = '<!DOCTYPE html>\n'
		+ '<html lang="en-US">\n'
		+ '<head>\n'
		+ ' <meta charset="UTF-8">\n'
		+ ' <title>Form Examples</title>\n'
		+ '</head>\n'
		+ '<body>\n'
		+ ' ' + text + '\n' // insert the body text
		+ '</body>\n'
		+ '</html>\n';
	result.send(html);
}