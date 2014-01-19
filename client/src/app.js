var UserCollection = require('./collections/users.js');
// var UserView = require('./views/user.js');



(function() {
	var users = new UserCollection();
	users.fetch({async:false});

	users.sync();
})();