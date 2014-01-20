var $ = require('jquery');
var Backbone = require('backbone');
var UserModel = require('./../models/user.js');
// var apiConfig = require('./../../../config/api-config.js');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({

	url: '/api/users',

	model: UserModel,

	initialize: function() {
		this.fetch();
	}
	
});




