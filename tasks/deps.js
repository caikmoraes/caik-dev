const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

async function depsCSS() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css', {allowEmpty: true})
        .pipe(uglifycss({'uglyComments': true}))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

async function depsFonts() {
    return gulp.src(['node_modules/font-awesome/fonts/*.*', 'src/assets/fonts/**/*.*'], {allowEmpty: true})
        .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
    depsCSS,
    depsFonts
}