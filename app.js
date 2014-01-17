var express = require('express');
var passport = require('passport');
var _ = require('underscore');
var LocalStrategy = require('passport-local').Strategy;

var app = express();


//configure app
app.configure(function() {
  app.use(express.static('public'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
});

var testUser = {
	id:'abc',
	displayName: 'Owen',
	name: {
		familyName: 'Scott',
		middleName: 'Michael',
		givenName: 'Owen'
	},
	emails: [{values:'owen.m.scott@gmail.com'}]

};

//configure authentication
passport.use(new LocalStrategy(
  function(username, password, done) {
		if (username === 'owen' && password === 'test') {
			return done(null, testUser);
		}
		return done(null,false);
    // User.findOne({ username: username }, function (err, user) {
    //   if (err) { return done(err); }
    //   if (!user) {
    //     return done(null, false, { message: 'Incorrect username.' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password.' });
    //   }
    //   return done(null, user);
    // });
  }
));

//configure routes
app.get('/', function (req, res) {
	res.sendfile('./views/index.html');
});

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
});		

app.listen('3000');
console.log('Server listning on port 3000');