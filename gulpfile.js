
var gulp = require('gulp'),
sass = require('gulp-sass')(require('sass')),
concat = require('gulp-concat');

gulp.task('compilar', function(){
  return gulp.src(['*.sass', 'sass/*.sass', './files/**/*.sass'])
  .pipe(sass().on('error', function(err){
    console.log(err)
  }))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('files/css'))
});

gulp.task('monitorar', function(){
  gulp.watch(['*.sass', 'sass/*.sass'], gulp.series('compilar'));
});

gulp.task('default', gulp.series('monitorar'));