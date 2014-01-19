var grunt = require('grunt');

module.exports = function(grunt) {

	//Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			src: ['*.js', 'routes/*.js', 'route-constructors/*.js', 'config/*.js', 'client/src/*.js', 'client/src/**/*.js'],
			options: {
				jshintrc:true
			}
		},
		browserify: {
			dist: {
				files: {
					'public/js/main.js': ['client/src/app.js']
				}
			},
			options: {
				debug: true
			}
		}
	});
};

// Load JSHint task
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-browserify');

// Default task.
grunt.registerTask('default', ['jshint', 'browserify']);
