const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    mqyunAdmin: path.resolve(__dirname, 'public/src/mqyunAdmin/mqyunAdmin.js')
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.styl$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "stylus-loader"
      }]
    }, {
      test: require.resolve('jquery'),
      use: [{
        loader: 'expose-loader',
        options: '$'
      }, {
        loader: 'expose-loader',
        options: 'jQuery'
      }]
    }]
  }
}
