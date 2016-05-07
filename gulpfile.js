var gulp = require('gulp');

const imagemin = require('gulp-imagemin');

gulp.task('default', () => {
    return gulp.src('IMG/*')
        .pipe(imagemin())
        .pipe(gulp.dest('IMG'));
});
