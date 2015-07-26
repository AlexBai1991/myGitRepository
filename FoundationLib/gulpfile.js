;(function () {
    var gulp = require('gulp');
    var sass = require('gulp-ruby-sass');

    var src = './';

    gulp.task('sass', function () {
        return sass(src + 'css') 
        .on('error', function (err) {
          console.error('Error!', err.message);
        })
        .pipe(gulp.dest(src + 'css'));
    });

    gulp.task('default', ['sass']);

})();