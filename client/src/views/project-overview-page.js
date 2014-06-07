var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

var ProjectListView = require('./project-summary-list.js');

module.exports = Backbone.View.extend({

	initialize: function() {

		this.render();
	},

	render: function() {
		var listView = new ProjectListView({
			collection:this.collection,
			el: this.el
		});
		return this;
	}

});