var _ = require('underscore');
var Hapi = require('hapi');

//constructor (only used here to build the documentation api)
var RestEndpointSet = require('./routes/constructors/endpoints.js');

//routes
var apiDataRoutes = require('./routes/data-api.js'),
		apiAdminRoutes = require('./routes/admin-api.js'),
		apiContentRoutes = require('./routes/content-api.js');

var server = new Hapi.Server('localhost', 8000);

server.pack.require('hapi-auth-cookie', function(err) {

	if (err) {
		throw err;
	}

	//set auth strategy for the server using happie autho cookie
	server.auth.strategy('session', 'cookie', {
		password: 'secret',
		cookie: 'contract-toolkit',
		redirectTo: '/login',
		isSecure: false //change to true for https
	});

	// server.route(apiContentRoutes);
	server = apiContentRoutes(server);
	server.route(apiAdminRoutes);
	server.route(apiDataRoutes);

	//api documentation route (implemented for now in server to have access to server object)
	server.route({
		method: 'GET',
		path: '/api/documentation',
		config: {
			handler: function(request, reply) {
				var table = server.table();
				reply( _.map(_.pluck(table,'settings'), function(route) {return {path:route.path, method:route.method, description:route.description}; } ));
			},
			// validation: options.validation || {},
			auth: false,
			tags: ['public', 'api'],
			description: 'Provides automatic documentation of all API routes.'
		}
		
	});





	server.start();


	console.log('Server listening on port 8000');
	

});