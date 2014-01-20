var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.Model.extend({

	initialize: function() {
		this.bind('change', function() {
			this.save();
		});
	},

	parse: function( response ) {
		response.id = response._id;
		return response;
	}
	
});