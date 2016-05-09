var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', function(){
  runSequence('clean:dist', ['copy', 'images', 'scss', 'angularjs', 'browserSync', 'watch']);
});

gulp.task('clean:dist', function() {
  return del.sync(['dist']);
});

gulp.task('scss', function() {
  return gulp.src('CSS/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('dist/CSS'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('images', function() {
  return gulp.src('IMG/*')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/IMG'));
});

gulp.task('angularjs', function() {
  gulp.src(['JS/app.js', 'JS/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/JS'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    reloadDelay: 1500,
    port: 8000
  });
});

gulp.task('bs-reload', function () {
  return browserSync.reload();
});

gulp.task('copy', function () {
  return gulp
    .src(['index.html', 'bower_components/**', 'JSON/**', 'TEMPLATES/**'], { base: './' })
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['browserSync', 'scss'], function() {
  gulp.watch('CSS/*.scss', ['scss']);
  gulp.watch(['index.html', 'bower_components/**', 'JSON/**', 'TEMPLATES/**'], ['copy']);
  gulp.watch(['index.html', 'bower_components/**', 'JSON/**', 'TEMPLATES/**']).on('change', browserSync.reload);
});
