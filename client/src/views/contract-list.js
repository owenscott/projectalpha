var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

var ListViewConstructor = require('./list-constructor.js');
var ContractView = require('./contract');

module.exports = new ListViewConstructor(ContractView);