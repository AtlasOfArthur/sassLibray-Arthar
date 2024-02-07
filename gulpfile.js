const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('scitech-arthar_Edotion-1.0/**/*.scss') // Original: src('index.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['scitech-arthar_Edotion-1.0/**/*.scss'], buildStyles) 
  // * tarkoittaa, että "hat mitä tahansa jolla on tämä tiedostopääte ja koosta se."
} // https://youtu.be/sIzt6kr3MHc?list=PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb&t=134
  // ** tarkoittaa, että etsi kaikki alikansiot..
exports.default = series(buildStyles, watchTask)