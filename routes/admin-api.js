
//routes in this module serve admin data such as users and also handle login and logout requests

var Hapi = require('hapi');
var dbConfig = require('./../config/db-config.js');
var StandardApiEndpoint = require('./../route-constructors/standard-api-endpoint.js');


// var bcrypt = require('bcrypt');
// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync('test', salt);

// var users = {
// 	owen: {
// 		id: 'Owen',
// 		// password: hash,
// 		password: 'test',
// 		name: 'Owen Scott'
// 	}
// };

// var login = function (req, res) {
	
// 	var message,
// 	account = null;

// 	if (req.auth.isAuthenticated) {
// 		return res().redirect('/');
// 	}


// 	if (req.method === 'post') {

// 		if (!req.payload.username || !req.payload.password) {
// 			message = 'Missing username or password';
// 		}
// 		else {
// 			account = users[req.payload.username];
// 			// if (!account || !bcrypt.compareSync(req.payload.password, account.password)) {
// 			// 	message = 'Invalid username or password ' + JSON.stringify(req.payload) + ' for account ' + JSON.stringify(account);
// 			// }
// 		}

// 	}

// 	if (req.method === 'get' || message) {
// 		return res('<html><head></head><body>' +
// 			(message ? message + '<br/><br/>' : '') +
// 			'<form method="post" action="/login">' +
// 			'Username: <input type="text" name="username"><br/>' +
// 			'Password: <input type="password" name="password"><br/>' +
// 			'<input type="submit" value="Login"></form></body></html>');
			
// 	}

// 	console.log('Attempting redirect for ' + JSON.stringify(account));
// 	req.auth.session.set(account);
// 	return res().redirect('/');
// };

// var logout = function (req, res) {
// 	req.auth.session.clear();
// 	return res().redirect('/');
// };

// //handler for requests on /api/users route
// var users = function(request, reply) {

// 	mongoClient.connect('mongodb://localhost:27017/contractCoding', function(err, db) {

// 		if (request.method === 'get') {

// 			//queries the db for all users, returning all fields except for the hashed passowrd
// 			db.collection('users').find( {}, {password:0} ).toArray( function (err, data) {
// 				reply(data);
// 				db.close();
// 			});

// 		}
// 		else if (request.method === 'post') {
// 			db.collection('users').find().toArray(function (err, data) {
// 				reply(data);
// 				db.close();
// 				//TODO: this should actually be a post
// 			});
// 		}


// 	});

// };

// //handler for requests on /api/user route
// var user = function (request, reply) {

// 	console.log(request.params.id);

// 	mongoClient.connect('mongodb://localhost:27017/contractCoding', function ( err, db ) {

// 		if (request.method === 'get') {

// 			db.collection('users').find( mongoObjectId(request.params.id), {password:0}).toArray( function (err, data) {
// 				reply(data);
// 				db.close();
// 			});

// 		}

// 	});

// };

// module.exports = [

// 	//login
// 	{
// 		method: ['GET', 'POST'],
// 		path: '/login',
// 		config: {
// 			handler: login,
// 			auth: {
// 				mode: 'try'
// 			}
// 		}
// 	},

// 	//logout
// 	{
// 		method: 'GET',
// 		path: '/logout',
// 		config: {
// 			handler: logout,
// 			auth: true
// 		}
// 	},

// 	//get all users or create user
// 	{
// 		method: ['GET', 'POST'],
// 		path: '/api/users',
// 		config: {
// 			handler: users,
// 			auth: false
// 		}
// 	},

// 	//get or update one user
// 	{
// 		method: ['GET', 'PUT'],
// 		path: '/api/users/{id}',
// 		config: {
// 			handler: user,
// 			auth: false
// 		}
// 	}



// ];

var userRoutes = new StandardApiEndpoint('/api/users', {
	collection: dbConfig.USERS_COLLECTION,
	validation: {
		payload: {
			name: Hapi.types.String().required()
		}
	}
});

module.exports = userRoutes;