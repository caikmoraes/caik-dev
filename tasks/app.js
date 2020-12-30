const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const htmlmin = require('gulp-htmlmin')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const babel = require('gulp-babel')

async function appHTML() {
    return gulp.src('src/**/*.html', {allowEmpty: true})
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build', {allowEmpty: true}))
}

async function appCSS() {
    return gulp.src('src/assets/sass/index.scss', {allowEmpty: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({'uglyComments': true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css', {allowEmpty: true}))
}

async function appJS() {
    return gulp.src('src/assets/js/*.js', {allowEmpty: true})
        .pipe(babel({presets: ['env']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

async function appIMG() {
    return gulp.src('src/assets/img/**/*.*', {allowEmpty: true})
        .pipe(gulp.dest('build/assets/img', {allowEmpty: true}))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appIMG,
    appJS
}