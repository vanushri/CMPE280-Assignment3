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
	        // + '<head>\n'
	        // + ' <meta charset="UTF-8">\n'
	        // + ' <title>Form Examples</title>\n'
	        // + '</head>\n'
	        
	        + '<body style="background-color:powderblue;">\n'
	        // + ' ' + text + '\n' // insert the body text
			+ '<h1 class="h1">HOME PAGE AFTER LOGIN</h1>'
	        + '<h2 style="text-align: center;margin-top: 20%">'+ text +'\n'
	        + '</body>\n'
	        + '</html>\n';
	    result.send(html);
	}
	