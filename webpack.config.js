var webpack = require('webpack'),
    path = require('path')
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var JAVASCRIPT_DIR = path.resolve(__dirname, 'js');

module.exports = {
  entry: JAVASCRIPT_DIR + '/components/index.jsx',
  output: {
    path: JAVASCRIPT_DIR,
    filename: 'application.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};