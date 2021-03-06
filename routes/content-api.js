var fs = require('fs');
var _ = require('underscore');

//routes in this module serve pages and other static content

// var home = function (request, reply) {
	
// 	reply('<html><head></head><body>Logged in as ' + request.auth.credentials.name +
// 		'<br/><br/><form method="get" action="/logout"><input type="submit" value="Logout"></form>' +
// 		'</body></html>'
// 	);
// };






module.exports = function(server) {

	//handlers
	var index = function (request, reply) {
		reply(fs.createReadStream('./views/index.html'));
	};

	//this needs to be configured properly
	var mainJs = function (request, reply) {
		reply(fs.createReadStream('./public/js/app.js'));
	};

	var mainCss = function (request, reply) {
		reply(fs.createReadStream('./public/css/style.css'));
	}

	var apiDocumentation = function (request, reply) {
		var html = '<html><head><style>td { border: solid 1px black;}</style></head><body><table style="border: solid 1px black"><thead><tr><th>Route</th><th>Method</th><th>Description</th></thead><tbody>';

		//inject a call to the api to get the documentation
		server.inject('/api/documentation', function (response) {
			html = html + _.map(JSON.parse(response.payload), function (route) {return '<tr>' + _.map(_.values(route), function(value) {return '<td>' + value + '</td>';}).join('') + '</tr>';});
			html = html + '</tbody></table></body></html>';
			reply(html);
		});
	};

	//routes
	var routes = [
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
			path:'/js/app.js',
			config: {
				handler: mainJs,
				auth:false
			}
		},
		{
			method:'GET',
			path: '/css/style.css',
			config: {
				handler: mainCss,
				auth:false
			}
		},
		{
			method:'GET',
			path:'/api-documentation',
			config: {
				handler: apiDocumentation,
				auth:false
			}
		}
	];

	//add routes to server
	server.route(routes);

	//return server
	return server;

};
	
	

