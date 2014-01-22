
var Hapi = require('hapi');
var dbConfig = require('./../config/db-config.js');
var RestEndpointSet = require('./constructors/endpoints.js');
var _ = require('underscore');

//route will be /api/projects/{projectId}/contracts
var contractRoutes = new RestEndpointSet('/api', {
	path: '/contracts',
	filter: [{projects:'projectId'}]
});

//route will be /api/projects
var projectRoutes = new RestEndpointSet('/api', {
	path: '/projects',
	filters: []
});

//route will be /api/projects/{projectId}/contracts/{contractId}/locations
var contractLocationRoutes = new RestEndpointSet('/api', {
	path: '/locations',
	filters: [{projects:'projectId'}, {contracts:'contractId'}]
});

//route will be /api/projects/{projectId}/locations
var projectLocationRoutes = new RestEndpointSet('/api', {
	path: '/locations',
	filters: [{projects:'projectId'}]
});

module.exports = _.union(contractRoutes, projectRoutes, contractLocationRoutes, projectLocationRoutes);

