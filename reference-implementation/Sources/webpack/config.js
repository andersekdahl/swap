'use strict';

var mode = require('./mode');

var devPort = process.env.WEBPACK_DEVPORT || 8089;

var publicPath = '/';
if (mode.IS_HOT) {
  // todo: Avoid this (https://github.com/webpack/style-loader/issues/55)
  publicPath = 'http://localhost:' + devPort + '/';
}

var path = require('path');
var root = path.join(__dirname, '..');
var loaders = require('./loaders');
var plugins = require('./plugins');
var postcss = require('./postcss');

module.exports = {
  entry: path.join(root, 'Features', 'entry.tsx'),

  debug: mode.IS_PROD ? null : true,
  devtool: mode.IS_PROD ? null : 'source-map',

  output: {
    path: root,
    filename: 'assets/bundle.js',
    pathinfo: true,
    publicPath: publicPath
  },

  resolve: {
    extensions: ['', '.tsx', '.js', '.scss'],
    alias: {},
    root: root,
  },

  devServer: {
    proxy: {
      '*': 'http://127.0.0.1:15002',
    },
    port: devPort,
    host: '0.0.0.0',
    inline: true,
    hot: true,
    contentBase: root,
  },

  module: {
    loaders: loaders
  },

  plugins: plugins,

  postcss: postcss
};
