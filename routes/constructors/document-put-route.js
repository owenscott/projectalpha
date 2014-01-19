var dbConfig = require('./../../config/db-config.js');
var mongoClient = require('mongodb').MongoClient;
var mongoObjectId = require('mongodb').ObjectID;

//handles /api/foo/:id

var Handler =  function(collection, options) {

	var options = options || {};

	return function (request, reply) {


		mongoClient.connect( dbConfig.DB_URL, function ( err, db ) {


			//add _id field to the payload so we can use the save() function with the payload object (save requires _id or creates a new object)
			request.payload._id = mongoObjectId(request.params.id);

			db.collection(collection).save(request.payload, function(err) {
				if(err) {
					reply(err);
				}
				else {
					reply();
				}
				db.close();
			});

		});
	};
};


module.exports = function (rootPath, options) {
	
	var collection = options.collection || {}; //TODO: add a regex to the second half to parse the end of the users object

	return {
		method: 'PUT',
		path: rootPath + '/{id}',
		config: {
			handler: new Handler(collection),
			auth: false,
			validate: options.validation
		}
	};

};