var $ = require('jquery');
var Backbone = require('backbone');
// var ContractModel = require('./contract.js');
var ProjectCollection = require('./../collections/projects.js');


Backbone.$ = $;

module.exports = Backbone.Model.extend({

	idAttribute: '_id',


	initialize: function() {
		this.set('projects', new ProjectCollection());
		this.get('projects').url = '/api/projects';
		this.get('projects').fetch();
	},

	defaults: {
		projectTitle: '',
		devtPartner: '',
		sector: ''
	}

});