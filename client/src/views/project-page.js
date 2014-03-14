var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var ProjectOverviewView = require('./project-overview-page.js');
var projectPageView = require('./project-page.js');
Backbone.$ = $;

module.exports = Backbone.View.extend({

	tagName:'div',

	events: {
		'click .btn#add-contract' : 'addContract',
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

	template: _.template('<button class="btn back">Back</button>' +
		'<% if (projectTitle && devtPartner) { %>' +
		'<h2>Project Title: <%= projectTitle %></h2>' +
		'<h2>Development Partner: <%= devtPartner %></h2>' +
		'<%}%> ' +
		'<div class="contract-section>' +
		'<div class="contracts">' +
		'</div>' +
		'<button class="btn" id="add-contract">Add Contract</button>' +
		'</div>'
	),

	addContract: function() {
		var projectContracts = this.model.get('contracts');
		projectContracts.create();
		console.log(projectContracts);
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