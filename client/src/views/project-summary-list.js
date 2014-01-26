var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

var IndividualProjectSummaryView = require('./project-summary');

module.exports = Backbone.View.extend({

	tagName:'div',

	initialize: function() {
		console.log('inlistview')
		console.log(this);
		this.collection.bind('sync', this.render, this);
	},

	render: function() {
		console.log('project list');
		console.log(this.collection);
		_.each(this.collection.models, function(model) {

			this.$el.append(new IndividualProjectSummaryView({model:model}).render().el);
		}, this);
		return this;
	}


});