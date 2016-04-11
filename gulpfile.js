var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('css', function(){
  gulp.src('./public/stylesheets/*.less')
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('concat-css', ['css'], function(){
  gulp.src(['./public/stylesheets/font-awesome.min.css', './public/stylesheets/caiters.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('js', function(){
  gulp.src('./public/javascripts/src/*.js')
    .pipe(minify({
      noSource: true,
      ext: {
        min: '.min.js'
      }
    }))
    .pipe(gulp.dest('./public/javascripts/'))
});

gulp.task('watch:css', ['css'], function(){
  gulp.watch('./public/stylesheets/*.less', ['css', 'concat-css']);
});

gulp.task('watch:js', ['js'], function(){
  gulp.watch('./public/javascripts/src/*.js', ['js']);
});

gulp.task('default', ['watch:css', 'watch:js']);
