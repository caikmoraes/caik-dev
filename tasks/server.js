const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

async function startServer() {
    return gulp.src('build', {allowEmpty: true})
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

async function watchFiles(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/img/**/*.*', () => gulp.series('appIMG')())
    return cb
}

module.exports = {
    watchFiles,
    startServer
}