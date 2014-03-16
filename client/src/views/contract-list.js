var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

var ContractView = require('./contract');

module.exports = Backbone.View.extend({

	tagName:'div',


	initialize: function() {
		this.collection.bind('sync', this.render, this);
	},

	render: function() {
		_.each(this.collection.models, function(model) {

			this.$el.append(new IndividualProjectSummaryView({model:model}).render().el);
		}, this);
		return this;
	}


});