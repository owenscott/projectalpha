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
		console.log('before passing');
		console.log(this.collection);
		var listView = new ProjectListView({
			collection:this.collection,
			el: this.el
		});
		console.log(listView);
		console.log(this.collection);
		return this;
	}


});