const gulp = require('gulp')
const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
}

function watchStyles (){
    watch(['./sass/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchStyles);