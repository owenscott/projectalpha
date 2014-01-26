// var UserCollection = require('./collections/users.js');
// var UserView = require('./views/user.js');

// var ContractCollection = require('./collections/contracts.js');
// var ProjectCollection = require('./collections/projects.js');
// var ProjectModel = require('./models/project.js');
var $ = require('jquery');
var AppModel = require('./models/app.js');
var AppView = require('./views/app.js');



(function() {


	// var projects = new ProjectCollection();
	// projects.url = '/api/projects';
	// projects.fetch();

	var app = new AppView ({
		model: new AppModel(),
		el: $('#app-container')
	});
	

})();