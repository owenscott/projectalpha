var ProjectModel = require('./../models/project.js');

var $ = require('jquery');
var Backbone = require('backbone');
// var ContractModel = require('./../models/contract.js');
// var apiConfig = require('./../../../config/api-config.js');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
	
	model: ProjectModel,

	initialize: function() {
		this.on('sync', function() {console.log('sunk'); console.log(this);});

	}
});



