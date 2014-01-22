var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.Model.extend({

	idAttribute: '_id',
	
	parse: function( response ) {
		response.id = response._id;
		return response;
	}
});