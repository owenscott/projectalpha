var $ = require('jquery');
// var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

var ProjectOverviewView = require('./project-overview-page.js');

module.exports = Backbone.View.extend({


	initialize: function() {
		this.render();
		
	},

	render: function() {
		var projectOverview = new ProjectOverviewView({
			collection: this.model.get('projects'),
			el: this.el
		});
		console.log('rendering app view');
		return this;
	}


});