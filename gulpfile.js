const { series, parallel } = require('gulp')

const { appCSS, appHTML, appIMG, appJS } = require('./tasks/app')
const { depsFonts } = require('./tasks/deps')
const { startServer, watchFiles } = require('./tasks/server')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsFonts)
    ),
    startServer,
    watchFiles
)