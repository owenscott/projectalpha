//lib
var Hapi = require('hapi');

//routes
var apiDataRoutes = require('./routes/data-api.js');
var apiAdminRoutes = require('./routes/admin-api.js');
var apiContentRoutes = require('./routes/content-api.js');

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
		isSecure: false
	});

	server.route(apiContentRoutes);
	server.route(apiAdminRoutes);
	server.route(apiDataRoutes);

	server.start();

	console.log('Server listening on port 8000');
	

});