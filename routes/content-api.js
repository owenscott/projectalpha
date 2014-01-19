var fs = require('fs');

//routes in this module serve pages and other static content

// var home = function (request, reply) {
	
// 	reply('<html><head></head><body>Logged in as ' + request.auth.credentials.name +
// 		'<br/><br/><form method="get" action="/logout"><input type="submit" value="Logout"></form>' +
// 		'</body></html>'
// 	);
// };

var index = function (request, reply) {
	reply(fs.createReadStream('./views/index.html'));
};

var public = function (request, reply) {
	reply(fs.createReadStream('./public/js/main.js'));
};


module.exports = [
	
	//index
	{
		method:'GET',
		path: '/',
		config: {
			handler: index,
			auth: false
		}
	},

	{
		method:'GET',
		path:'/js/main.js',
		config: {
			handler: public,
			auth:false
		}
	}

];