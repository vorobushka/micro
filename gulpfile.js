'use strict';

const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', () => {
  return gulp.src('app/sass/**/*.sass') // берём все sass-файлы 
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('dist/css'));      // выгружаем результат 
});