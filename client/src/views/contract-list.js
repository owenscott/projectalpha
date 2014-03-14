var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var projectPageView = require('./project-page.js');
Backbone.$ = $;

module.exports = Backbone.View.extend({

	tagName:'div',

	initialize: function() {

		console.log(this.model);
		this.render();
	},

	render: function() {
		this.$el.html( this.template( this.model.attributes ) );
		return this;
	},

	template: _.template('<% if (projectTitle && devtPartner) { %>' +
		'<div class="row-fluid">' +
		'<h2>Project Title: <%= projectTitle %></h2>' +
		'<h2>Development Partner: <%= devtPartner %></h2>' +
		'</div>' +
		'<%}%> '
	)

});