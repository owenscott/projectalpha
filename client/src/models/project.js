var $ = require('jquery');
var Backbone = require('backbone');
// var ContractModel = require('./contract.js');
var ContractCollection = require('./../collections/contracts.js');


Backbone.$ = $;

module.exports = Backbone.Model.extend({

	idAttribute: '_id',


	initialize: function() {
		this.set('contracts', new ContractCollection());
		this.get('contracts').url = '/api/projects/' + this.get('_id') + '/contracts';
	}


});