const path = require('path')

module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias.set('@', path.join(__dirname, 'src'))
    }
}