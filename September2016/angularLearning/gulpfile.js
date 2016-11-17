var gulp = require('gulp'),
  server = require('gulp-server-livereload');
//   connect = require('gulp-connect');
//
// gulp.task('connect', function() {
//   connect.server({
//     root: './',
//     livereload: true
//   });
// });
//
// gulp.task('html', function () {
//   gulp.src('index.html')
//     .pipe(connect.reload());
// });
//
// //gulp.task('watch', function () {
//   gulp.watch(['./app/*.html'], ['html']);
// });
//
// // gulp.task('default', ['connect', 'watch']);
// gulp.task('default', 'connect');


gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      defaultFile: 'index.html'
    }));
});
