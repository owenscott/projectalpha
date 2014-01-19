

//routes in this module serve application data

var woot = function (request, reply) {
	reply('w00t');
};


module.exports = [
	
	//test
	{
		method: 'GET',
		path: '/fun',
		config: {
			handler: woot,
			auth: true
		}
	}

];