var $ = require('jquery');
var Backbone = require('backbone');
// var ContractModel = require('./contract.js');
var ContractCollection = require('./../collections/contracts.js');


Backbone.$ = $;

module.exports = Backbone.Model.extend({

	idAttribute: '_id',

	parse: function( response ) {
		response.id = response._id;
		return response;
	},

	initialize: function() {
		this.set('contracts', new ContractCollection());
	}


});