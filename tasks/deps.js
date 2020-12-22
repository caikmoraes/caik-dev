const gulp = require('gulp')

async function depsFonts() {
    return gulp.src('src/assets/fonts/**/*.*', {allowEmpty: true})
        .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
    depsFonts
}