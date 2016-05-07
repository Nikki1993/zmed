var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate')

const imagemin = require('gulp-imagemin');

gulp.task('default', () => {
  return gulp.src('IMG/*')
    .pipe(imagemin())
    .pipe(gulp.dest('IMG'));
});

gulp.task('js', function() {
  gulp.src(['JS/app.js', 'JS/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('JS/'))
});

gulp.task('watch', ['js'], function() {
  gulp.watch('JS/**/*.js', ['js'])
})

gulp.task('default', ['js', 'watch']);
