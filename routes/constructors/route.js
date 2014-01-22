var dbConfig = require('./../../config/db-config.js');
var mongoClient = require('mongodb').MongoClient;
var mongoObjectId = require('mongodb').ObjectID;
var _ = require('underscore');


//little helper function
function getObjectKey(obj) {
	return Object.keys(obj)[0];
}

//returns a handler for /api/foo
var RequestHandler = function(collection, options) {


	return function(request, reply) {

		console.log(request.params);

		mongoClient.connect(dbConfig.DB_URL, function(err, db) {


			//create object for document requests by merging the payload and parameters
			//payload = the json data sent via a post or put request
			//params = everything that was in the URL string (excluding the final )
			if (request.params && request.params._id) {
				request.params._id = mongoObjectId(request.params._id);
			}
			var requestObject = _.extend( request.params || {}, request.payload || {});
			console.log(requestObject);

			//get request for a collection
			if (request.method === 'get' && options.resourceType === 'collection') {
				db.collection(collection).find(requestObject, options.projection).toArray( function (err, data) {
					if (err) {
						throw err;
					}
					reply(data);
					db.close();
				});
			}
			//post request to add a document to a collection
			else if (request.method === 'post' && options.resourceType === 'collection') {
				db.collection(collection).insert(requestObject, function(err, data) {
					if (err) {
						throw err;
					}
					console.log(JSON.stringify(data));
					//replies data[0] because backbone expects a json object and mongo returns an array with one object
					reply(data[0]);
					db.close();
				});
			}
			//get request for a document
			else if (request.method === 'get' && options.resourceType === 'document') {
				db.collection(collection).find(requestObject, options.projection).toArray( function (err, data) {
					if (err) {
						throw err;
					}
					if (data.length > 1) {
						throw new Error('Oops, a request for a single object has returned multiple objects.');
					}
					reply(data[0]);
					db.close();
				});
			}
			//put request to update a document 
			else if (request.method === 'put' && options.resourceType === 'document') {
				db.collection(collection).save(requestObject, function(err, data) {
					if(err) {
						throw err;
					}
					else {
						reply(data[0]);
					}
					db.close();
				});
			}
			//delete request to remove a document
			else if (request.method === 'delete' && options.resourceType === 'document') {
				db.collection(collection).remove( requestObject, function(err, number) {
					if(err) {
						throw err;
					}
					else {

						console.log(number + ' documents deleted from collection ' + collection);
						reply();
					}
					db.close();
				});
			}
			//throw an error b/c no handler
			else {
				throw new Error('No handler exists for the type of request sent.');
			}

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



module.exports = function (basePath, options) {

	//parse default collection from path url if not given
	var collection = options.collection || (options.path && options.path.replace(/\//, '')) || false; //TODO: add a regex to the second half to parse the end of the users object
	
	if (!collection) {
		throw new Error('No collection name specified for route');
	}

	//set some more defaults
	var filters = options.filters || {},
			path = basePath || '/',
			verb = options.verb || 'GET',
			resourceType = options.resourceType,
			tags = options.keys || [],
			description = options.description || 'None';

	if (!resourceType) {
		throw new Error('No resource type (document or collection) specified for route.');
	}

	//iterate through each filter and add it to the path
	for (var f in filters) {

		if (filters.hasOwnProperty(f)) {

			//check if they made a common mistake by sending filters: {foo:'bar', baz:'bun'} instead of filters: [{foo:'bar'}, {bas:'bun'}]
			if (Object.keys(filters[f]).length > 1) {
				throw new Error('Your filter object has too many key/value pairs (max 1).');
			}

			//if no errot than add the filters to the path (form '/filterKey/{filterValue}')
			path = path + '/' + getObjectKey(filters[f]) + '/{' + filters[f][getObjectKey(filters[f])] + '}';
		
		}
	
	}

	//add the path segment for the resource being requested
	path = path + options.path;

	//path should not look like "basepath/filterKey/{filterValue}/resource"
	if (resourceType === 'document') {
		path = path + '/{_id}';
	}

	//return a hapi route object
	return {
		method: verb,
		path: path,
		config: {
			handler: new RequestHandler(collection, {
				projection: options.projection || {},
				resourceType: resourceType
			}),
			validate: options.validation || {},
			auth: false,
			tags: tags,
			description: description
		}
	};

};

