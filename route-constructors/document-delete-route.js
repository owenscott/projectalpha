var dbConfig = require('./../config/db-config.js');
var mongoClient = require('mongodb').MongoClient;
var mongoObjectId = require('mongodb').ObjectID;

//handles /api/foo/:id

var Handler =  function(collection, options) {

	var options = options || {};

	return function (request, reply) {
		console.log('delete request received for ' + request.params.id)

		mongoClient.connect( dbConfig.DB_URL, function ( err, db ) {

			db.collection(collection).remove( { _id: mongoObjectId( request.params.id ) }, function(err, number) {
				if(err) {
					reply(err);
				}
				else {
					reply(number + ' documents removed');
				}
				db.close();
			});

		});
	};
};


module.exports = function (rootPath, options) {
	
	var collection = options.collection || {}; //TODO: add a regex to the second half to parse the end of the users object

	return {
		method: 'DELETE',
		path: rootPath + '/{id}',
		config: {
			handler: new Handler(collection),
			auth: false
		}
	};

};