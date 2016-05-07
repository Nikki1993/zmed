var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var imagemin = require('gulp-imagemin');
var del = require('del');

// Clean dist folder

gulp.task('default', function () {

});

gulp.task('clean', function () {
    return del.sync(['dist/**']);
});

// Optimize images

gulp.task('image', function() {
  return gulp.src('IMG/*')
    .pipe(imagemin())
    .pipe(gulp.dest('IMG'));
});

// Optimize Angularjs files, concat, uglify + preserving angularjs injections

gulp.task('js', function() {
  gulp.src(['JS/app.js', 'JS/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify({
      compress: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/JS/'));
});

// Copy paste files that do not require any additional work

gulp.task('copy', function () {
  return gulp
    .src(['index.html', 'bower_components/**', 'JSON/**', 'IMG/**', 'CSS/styles.min*', 'TEMPLATES/**'], { base: './' })
    .pipe(gulp.dest('dist/'));
});

// after all done, watch for JS changes and add them to webapp.js

gulp.task('watch', ['js'], function() {
  gulp.watch('JS/**/*.js', ['js']);
  gulp.watch('IMG/*.png', ['image']);
  gulp.watch(['index.html', 'bower_components/**', 'JSON/**', 'IMG/**', 'CSS/styles.min*', 'TEMPLATES/**'], ['copy']);
});

gulp.task('default', ['clean', 'image', 'js', 'copy', 'watch']);
