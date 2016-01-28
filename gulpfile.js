var gulp = require('gulp');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');

gulp.task('compile', function () {
  gulp.src('./src/css/site.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build/css/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./build/'))
    .pipe(connect.reload());
});

gulp.task('watch:html', function () {
  gulp.watch(['./src/*.html'], ['html']);
});

gulp.task('watch:styl', function() {
  gulp.watch(['./src/css/*.styl'], ['compile']);
})

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('default', ['connect', 'watch:html', 'watch:styl']);
