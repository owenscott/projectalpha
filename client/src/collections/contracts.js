var $ = require('jquery');
var Backbone = require('backbone');
var ContractModel = require('./../models/contract.js');
// var apiConfig = require('./../../../config/api-config.js');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
	
	model: ContractModel,

	initialize: function() {
		this.on('change', this.saveModel, this);
		this.on('add', this.onAdd, this);
	},

	saveModel: function(model) {
		model.save({},{silent:true});
	},

	onAdd: function(model) {
		model.set('amount', 50000);
	}

});




