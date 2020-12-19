const { series, parallel } = require('gulp')

const { appCSS, appHTML, appIMG, appJS } = require('./tasks/app')
const { depsCSS, depsFonts } = require('./tasks/deps')
const { startServer, watchFiles } = require('./tasks/server')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    startServer,
    watchFiles
)