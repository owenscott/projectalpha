var fs = require('fs');
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var userTemplate = fs.readFileSync(__dirname + '/../templates/user.tmpl')

Backbone.$ = $;

module.exports = Backbone.View.extend({

	template: _.template(userTemplate),

	initialize: function() {
		this.el = $('body');
		this.render();
	},

	render: function() {
		this.collection.each(function(model) {
			this.$el.append = this.template(model.toJSON);
		});
	}

});
