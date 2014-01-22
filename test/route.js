/*global describe*/
/*global it*/

var expect = require('chai').expect;
var Route = require('./../routes/constructors/route.js');

var testRoute = new Route('/foo', {path: '/bar'});

describe('Route Constructors', function() {

	describe('Collection Get Route', function() {

		it('Should have a handler', function() {
			expect(testRoute).to.have.deep.property('config.handler');
		});

		it('Should have auth set to true by default', function() {
			expect(testRoute).to.have.deep.property('config.auth', true);
		});

	});
});
