const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const ngAnnotate = require('gulp-ng-annotate');
const plumber = require('gulp-plumber');
const gnf = require('gulp-npm-files');
const image = require('gulp-image');
const pngquant = require('imagemin-pngquant');
const webstandards = require('gulp-webstandards');
const util = require('gulp-util');
const jsonMinify = require('gulp-json-minify');

gulp.task('default', (callback) =>  {
  runSequence('clean:dist', ['json:minify', 'copy', 'images', 'angularjs', 'scss'], 'webstandards', 'copyNpmDependenciesOnly', 'watch', callback);
});

gulp.task('build', (callback) => {
  runSequence('clean:dist', ['json:minify', 'copy', 'images', 'angularjs', 'scss'], 'webstandards', 'copyNpmDependenciesOnly', callback);
});

gulp.task('clean:dist', () => {
  return del.sync(['dist']);
});

gulp.task('json:minify', function() {
    return gulp.src('JSON/*.json')
        .pipe(jsonMinify())
        .pipe(gulp.dest('dist/JSON'))
        .pipe(browserSync.reload({
          stream: true
        }))
        .on('error', util.log);
});

gulp.task('copyNpmDependenciesOnly', () => {
  gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./dist'));
});

gulp.task('scss', () => {
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

gulp.task('images', () => {
  return gulp.src('IMG/**')
  .pipe(cache(imagemin({
            progressive: true,
            use: [pngquant()]
        })))
  .pipe(gulp.dest('dist/IMG'));
});

gulp.task('angularjs', () => {
  gulp.src(['JS/app.js', 'JS/**/*.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/JS'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    reloadDelay: 1000,
    port: 8000
  });
});

gulp.task('copy', () => {
  return gulp
    .src(['index.html',
    '.htaccess',
    'TEMPLATES/**'],
    {
      base: './'
    })
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['scss', 'browserSync'], () => {
  gulp.watch('CSS/*.scss', ['scss']);
  gulp.watch(['index.html', 'TEMPLATES/**'], ['copy']).on('change', browserSync.reload);
  gulp.watch('JS/**/*js', ['angularjs']).on('change', browserSync.reload);
});

gulp.task('webstandards', () => {
    return gulp.src('dist/**').pipe(webstandards());
});
