var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.Model.extend({

	idAttribute: '_id',

	initialize: function() {
		this.bind('change', function() {
			this.save();
		});
	}


	
});