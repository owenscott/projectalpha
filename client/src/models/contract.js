var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.Model.extend({

	idAttribute: '_id',

	defaults: {
		title: '',
		issuerId:'',
		category: '',
		tenderUrls: [],
		awardAmount: '',
		contractorName:'',
		contractorCountry:''
	}

});