var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

var args = process.argv
const prod = args.indexOf('--prod') > -1
var conf = config.test

if (prod) {
    conf = config.build
}

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction ?
            conf.productionSourceMap : config.dev.cssSourceMap,
        extract: isProduction
    })
}