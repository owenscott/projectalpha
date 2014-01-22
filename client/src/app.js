// var UserCollection = require('./collections/users.js');
// var UserView = require('./views/user.js');

// var ContractCollection = require('./collections/contracts.js');
var ProjectCollection = require('./collections/projects.js');
var ProjectModel = require('./models/project.js');



(function() {


	// var users = new UserCollection();
	// users.fetch({async:false});
	// var projects = new ProjectCollection();
	// // var project = projects.create({name:'Learning Backbone'}, {wait:true});
	// projects.fetch({async:false});
	// projects.models[0].get('contracts').fetch({async:false});

	// project.get('contracts').create({name:'Bridge Construction', amount:32000}, {wait:true});
	// project.get('contracts').models[0].set('amount', 50000);
	// projects.add(project);
	var projects = new ProjectCollection();
	projects.url = '/api/projects';
	projects.fetch();
	projects.url = '/api/projects';
	var project = projects.create({name:'Learning PUT'}, {wait:true});
	console.log(project);
	console.log(project.url);
	console.log(projects);

	// console.log(projects.models[0]);

	

})();