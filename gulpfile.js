var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var brfs = require('brfs');


//paths to watch
var paths = {
  scripts: ['client/src/**/*.js', 'client/src/*.js'],
  templates: ['client/src/templates/*.tmpl']
};


gulp.task('buildJs', function() {
	gulp.src('client/src/app.js')
	.pipe(browserify({
		transform: [brfs]
	}))
	.pipe(rename('app.js'))
	.pipe(gulp.dest('./public/js'))
});

gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['buildJs'])
	gulp.watch(paths.templates, ['buildJs'])
})

gulp.task('default', ['buildJs', 'watch'])
