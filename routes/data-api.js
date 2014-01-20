
// var Hapi = require('hapi');
var dbConfig = require('./../config/db-config.js');
var apiConfig = require('./../config/api-config.js');
var StandardApiEndpoint = require('./constructors/standard-api-endpoint.js');

var contractRoutes = new StandardApiEndpoint(apiConfig.CONTRACTS_URL, {
	collection: dbConfig.CONTRACTS_COLLECTION
});

var projectRoutes = new StandardApiEndpoint(apiConfig.PROJECTS_URL, {
	collection: dbConfig.PROJECTS_COLLECTION
});


module.exports = contractRoutes.concat(projectRoutes);

