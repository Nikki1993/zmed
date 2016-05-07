var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate')

const imagemin = require('gulp-imagemin');

// Optimize images

gulp.task('default', () => {
  return gulp.src('IMG/*')
    .pipe(imagemin())
    .pipe(gulp.dest('IMG'));
});

// Optimize Angularjs files, concat, uglify + preserving angularjs injections

gulp.task('js', function() {
  gulp.src(['JS/app.js', 'JS/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('webapp.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
});

// after all done, watch for JS changes and add them to webapp.js

gulp.task('watch', ['js'], function() {
  gulp.watch('JS/**/*.js', ['js'])
  gulp.watch('IMG/*.png', ['images']);
})

gulp.task('default', ['js', 'watch']);
