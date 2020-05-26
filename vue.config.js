const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageInfo = require('./package.json')
const webpack = require('webpack')
const path = require('path')

function getEnv () {
  return (() => {
    if (process.env.CODE_ENV === 'dev') {
      return 'dev'
    } else if (process.env.CODE_ENV === 'beta') {
      return 'qa'
    }
    return ''
  })()
}

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },

  publicPath: './',
  lintOnSave: process.env.NODE_ENV !== 'production',

  devServer: {
    disableHostCheck: true
  },

  css: {
    loaderOptions: {
      stylus: {
        // 'resolve url': true,
        // 'import': [
        //   './src/assets/style/base.styl'
        // ]
        // prependData: `@import './src/assets/style/base.styl'`
      }
    }
  },

  configureWebpack: {
    externals: {
      'area-data': 'window.AreaData'
    },
    plugins: [
      new webpack.DefinePlugin({
        CODE_ENV: JSON.stringify(getEnv())
      }),
      new HtmlWebpackPlugin({
        env: getEnv(),
        filename: 'index.html',
        template: './public/index.html',
        title: packageInfo.description,
        version: packageInfo.version,
        vueVersion: packageInfo.dependencies.vue && 'v' + packageInfo.dependencies.vue.replace('^', ''),
        vueRouterVersion: packageInfo.dependencies['vue-router'] && 'v' + packageInfo.dependencies['vue-router'].replace('^', ''),
        vuexVersion: packageInfo.dependencies.vuex && 'v' + packageInfo.dependencies.vuex.replace('^', '')
      })
    ]
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: []
    }
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/style/base.styl'),
      ],
    })
}
