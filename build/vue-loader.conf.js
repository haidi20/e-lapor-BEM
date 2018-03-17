'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  // other options...
  module: {
    // `module.rules` is the same as `module.loaders` in 1.x
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // `loaders` will overwrite the default loaders.
          // The following config will cause all `<script>` tags without `lang`
          // attribute to be loaded with `coffee-loader`
          loaders: {
            js: 'coffee-loader',
            scss: 'style!css!sass',
          },

          // `preLoaders` are attached before the default loaders.
          // You can use this to pre-process language blocks - a common use
          // case would be build-time i18n.
          preLoaders: {
            js: '/path/to/custom/loader'
          },

          // `postLoaders` are attached after the default loaders.
          //
          // - For `html`, the result returned by the default loader
          //   will be compiled JavaScript render function code.
          //
          // - For `css`, the result will be returned by `vue-style-loader`
          //   which isn't particularly useful in most cases. Using a PostCSS
          //   plugin will be a better option.
          postLoaders: {
            html: 'babel-loader'
          },

          // `excludedPreLoaders` should be regex
          excludedPreLoaders: /(eslint-loader)/
        }
      }
    ]
  }
}
