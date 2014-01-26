var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.View.extend({

	tagName:'div',

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html( this.template( this.model.attributes ) );
		return this;
	},

	template: _.template('<% if (projectTitle && devtPartner) { %><h3><%= projectTitle %> (<%= devtPartner %>)</h3><%}%>')

});