var ProjectModel = require('./../models/project.js');

var $ = require('jquery');
var Backbone = require('backbone');
// var ContractModel = require('./../models/contract.js');
// var apiConfig = require('./../../../config/api-config.js');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
	
	// url: '/foo',
	model: ProjectModel,

	initialize: function() {

		// this.fetch();

	}
});



