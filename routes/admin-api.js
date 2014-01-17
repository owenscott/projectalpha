
//routes in this module serve admin data such as users and also handle login and logout requests

var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync('test', salt);

var users = {
  owen: {
    id: 'Owen',
    password: hash,
    name: 'Owen Scott'
  }
};

var login = function (req, res) {
  
  var message, 
    account = null;

  if (req.auth.isAuthenticated) {
    return res().redirect('/');
  }


  if (req.method === 'post') {

    if (!req.payload.username || !req.payload.password) {
      message = 'Missing username or password';
    }
    else {
      account = users[req.payload.username];
      if (!account || !bcrypt.compareSync(req.payload.password, account.password)) {
        message = 'Invalid username or password ' + JSON.stringify(req.payload) + ' for account ' + JSON.stringify(account);
      }
    }

  }

  if (req.method === 'get' || message) {
    return res('<html><head></head><body>' 
      + (message ? message + '<br/><br/>' : '')
      + '<form method="post" action="/login">'
      + 'Username: <input type="text" name="username"><br/>'
      + 'Password: <input type="password" name="password"><br/>'
      + '<input type="submit" value="Login"></form></body></html>');
      
  }

  console.log('Attempting redirect for ' + JSON.stringify(account));
  req.auth.session.set(account);
  return res().redirect('/');
}

var logout = function (req, res) {
  req.auth.session.clear();
  return res().redirect('/');
};

module.exports = [

	//login
  {
  	method: ['GET', 'POST'], 
  	path: '/login', 
  	config: {
  		handler: login, 
  		auth: {
  			mode: 'try'
  		}
  	}
  },

  //logout
  {
  	method: 'GET', 
  	path: '/logout', 
  	config: {
  		handler: logout, 
  		auth: true
  	}
  },



 ]