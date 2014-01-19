var dbConfig = require('./../../config/db-config.js');
var mongoClient = require('mongodb').MongoClient;

var CollectionHandler = function(collection, options) {

	var options = options || {};

	return function(request, reply) {

		mongoClient.connect(dbConfig.DB_URL, function(err, db) {

			//adds a new object to the db
			db.collection(collection).insert(request.payload, function (err, data) {
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

	var collection = options.collection || {};
	var validation = options.validation || {};

	return {
		method: 'POST',
		path: rootPath,
		config: {
			handler: new CollectionHandler(collection),
			auth: false,
			validate: validation
		}
	};

};