var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var ProjectPageView = require('./project-page.js');
Backbone.$ = $;

module.exports = Backbone.View.extend({

	tagName:'div',

	events: {
		'click a': 'projectClick'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html( this.template( this.model.attributes ) );
		return this;
	},

	template: _.template('<% if (projectTitle && devtPartner) { %><a href="#"><h3><%= projectTitle %> (<%= devtPartner %>)</h3></a><%}%>'),

	projectClick: function() {
		// this.$el.parent().html(new ProjectPageView({model:this.model}).render().el);
		var projectPage = new ProjectPageView({model:this.model, el:this.$el.parent()});
	}

});