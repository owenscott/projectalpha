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
		return this;
	},

	template: _.template(projectPageTemplate),

	addContract: function() {
		var projectContracts = this.model.get('contracts');
		projectContracts.create();
		console.log(this.model.get('contracts'));
	},

	backToMainPage: function() {
		console.log(this.model);
		console.log(ProjectOverviewView);
		var mainPage = new ProjectOverviewView({
			$el:this.$el.parent(),
			collection:this.model.collection
		});

	}

});