var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

var ListViewConstructor = require('./list-constructor.js')

var IndividualProjectSummaryView = require('./project-summary');

module.exports = new ListViewConstructor(IndividualProjectSummaryView);