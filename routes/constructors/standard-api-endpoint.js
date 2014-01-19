var CollectionGetRoute = require('./collection-get-route.js');
var CollectionPostRoute = require('./collection-post-route.js');
var DocumentGetRoute = require('./document-get-route.js');
var DocumentPutRoute = require('./document-put-route.js');
var DocumentDeleteRoute = require('./document-delete-route.js');


//helper function that pulls together the most common combination of routes
module.exports = function	(rootPath, options) {

	var routes = [];

	routes.push(new DocumentGetRoute(rootPath, options));
	routes.push(new CollectionGetRoute(rootPath, options));
	routes.push(new CollectionPostRoute(rootPath, options));
	routes.push(new DocumentPutRoute(rootPath, options));
	routes.push(new DocumentDeleteRoute(rootPath, options));

	return(routes);

};


