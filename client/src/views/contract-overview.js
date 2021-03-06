var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

var ContractListView = require('./contract-list.js');

module.exports = Backbone.View.extend({

	initialize: function() {

		this.render();
	},

	render: function() {
		var listView = new ContractListView({
			collection:this.collection,
			el: this.el
		});
		return this;
	}

});