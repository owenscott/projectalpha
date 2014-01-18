
//routes in this module serve pages and other static content

var home = function (request, reply) {
	
	reply('<html><head></head><body>Logged in as ' + request.auth.credentials.name +
		'<br/><br/><form method="get" action="/logout"><input type="submit" value="Logout"></form>' +
		'</body></html>'
	);
};




module.exports = [
	
	//index
	{
		method:'GET',
		path: '/',
		config: {
			handler: home,
			auth: true
		}
	}

];