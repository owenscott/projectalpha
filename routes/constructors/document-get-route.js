var dbConfig = require('./../../config/db-config.js');
var mongoClient = require('mongodb').MongoClient;
var mongoObjectId = require('mongodb').ObjectID;

//handles /api/foo/:id

var Handler =  function(collection, options) {

	var options = options || {};

	return function (request, reply) {

		mongoClient.connect( dbConfig.DB_URL, function ( err, db ) {

			db.collection(collection).find( mongoObjectId(request.params.id), options.projection || {} ).toArray( function (err, data) {
				if (err) {
					throw err;
				}
				reply (data);
				db.close();
			});

		});

	};
};


module.exports = function (rootPath, options) {
	
	var collection = options.collection || {}; //TODO: add a regex to the second half to parse the end of the users object

	return {
		method: 'GET',
		path: rootPath + '/{id}',
		config: {
			handler: new Handler(collection),
			auth: false
		}
	};

};