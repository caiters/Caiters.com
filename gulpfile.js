// Include gulp
var gulp = require('gulp');

// Plugins
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

// compile less
gulp.task('less', function () {
  return gulp.src('./*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('*.less', ['less']);
});

// default task
gulp.task('default', ['less', 'watch']);
