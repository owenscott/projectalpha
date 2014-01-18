var grunt = require('grunt');

module.exports = function(grunt) {

	//Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			src: ['*.js', 'routes/*.js'],
			options: {
				jshintrc:true
			}
		}
	});
};

// Load JSHint task
grunt.loadNpmTasks('grunt-contrib-jshint');

// Default task.
grunt.registerTask('default', ['jshint']); //, 'appcache'
