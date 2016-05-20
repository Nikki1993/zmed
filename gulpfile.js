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
var plumber = require('gulp-plumber');
var gnf = require('gulp-npm-files');
var critical = require('critical');

gulp.task('default', function() {
  runSequence('clean:dist', ['copyNpmDependenciesOnly', 'copy', 'images', 'scss', 'angularjs', 'browserSync', 'watch']);
});

gulp.task('clean:dist', function() {
  return del.sync(['dist']);
});

gulp.task('copyNpmDependenciesOnly', function() {
  gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./dist'));
});

gulp.task('scss', function() {
  return gulp.src('CSS/*.scss')
    .pipe(plumber())
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
    .pipe(plumber())
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/IMG'));
});

gulp.task('angularjs', function() {
  gulp.src(['JS/app.js', 'JS/**/*.js'])
    .pipe(plumber())
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
    reloadDelay: 1000,
    port: 8000
  });
});

gulp.task('copy', function() {
  return gulp
    .src(['index.html',
    'JSON/**',
    'TEMPLATES/**'],
    {
      base: './'
    })
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['browserSync', 'scss'], function() {
  gulp.watch('CSS/*.scss', ['scss']);
  gulp.watch(['index.html', 'JSON/**', 'TEMPLATES/**'], ['copy']).on('change', browserSync.reload);
  gulp.watch('JS/**/*js', ['angularjs']).on('change', browserSync.reload);
});

// has to be execited manually to inline critical css 1920x1080 default

gulp.task('critical', function () {
    critical.generate({
        inline: true,
        base: 'dist/',
        src: 'index.html',
        dest: 'dist/index.html',
        minify: true,
        width: 1920,
        height: 1080
    });
});
