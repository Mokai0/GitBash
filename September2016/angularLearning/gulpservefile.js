gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      defaultFile: 'index.html'
    }));
});
