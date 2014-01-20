var dbConfig = require('./../../config/db-config.js');
var mongoClient = require('mongodb').MongoClient;

//returns a handler for /api/foo

var Handler = function(collection, options) {

	var options = options || {};
	var options.query = options.query || {};

	return function(request, reply) {

		mongoClient.connect(dbConfig.DB_URL, function(err, db) {

			//queries the db for all documents in the collection, returning all fields except for those excluded
			db.collection(collection).find( options.query, options.projection || {} ).toArray( function (err, data) {
				if (err) {
					throw err;
				}
				reply(data);
				db.close();
			});

		});

	};
};


module.exports = function (rootPath, options) {

	var collection = options.collection || {}; //TODO: add a regex to the second half to parse the end of the users object

	return {
		method: 'GET',
		path: rootPath,
		config: {
			handler: new Handler(collection),
			auth: false
		}
	};

};