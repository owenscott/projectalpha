var $ = require('jquery');
var _ = require('underscore');
var fs = require('fs');
var Backbone = require('backbone');

var projectSummaryTemplate = fs.readFileSync(__dirname + '/../templates/project-summary.tmpl', 'utf8');
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

	template: _.template(projectSummaryTemplate),

	projectClick: function() {
		// this.$el.parent().html(new ProjectPageView({model:this.model}).render().el);
		var projectPage = new ProjectPageView({model:this.model, el:this.$el.parent()});
	}

});