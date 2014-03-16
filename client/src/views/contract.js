var fs = require('fs');
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var contractTemplate = fs.readFileSync(__dirname + '/../templates/contract.tmpl')




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

	template: _.template(contractTemplate)

});