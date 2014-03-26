var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var fs = require('fs');

var projectPageTemplate = fs.readFileSync(__dirname + '/../templates/project-page.tmpl');

var ProjectOverviewView = require('./project-overview-page.js');
var projectPageView = require('./project-page.js');
Backbone.$ = $;

module.exports = Backbone.View.extend({

	tagName:'div',

	events: {
		'click .btn' : 'addContract',
		'click .btn.back' : 'backToMainPage'
	},

	initialize: function() {
		this.model.get('contracts').on('add', function() {console.log('we got a new contract!');});
		this.render();
	},

	render: function() {
		this.$el.html( this.template( this.model.attributes ) );
		this.$el.append('<h1>asdfasdgasdfasdfasd</h1>')
		console.log('rendering');
		return this;
	},

	template: _.template(projectPageTemplate),

	addContract: function() {
		var projectContracts = this.model.get('contracts');
		projectContracts.create();
	},

	backToMainPage: function() {
		var mainPage = new ProjectOverviewView({
			$el:this.$el.parent(),
			collection:this.model.collection
		});

	}

});