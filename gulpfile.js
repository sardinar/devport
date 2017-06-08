var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Wow we create a gulp task!")
});

gulp.task('html', function() {
  console.log("HTML file was changed")
});

gulp.task('styles', function() {
  console.log("CSS file was changed")
});

gulp.task('watch', function(){
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
