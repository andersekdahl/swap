'use strict';

var mode = require('./mode');

module.exports = [];

var babelLoaderOptions = {
  cacheDirectory: true,
  plugins: []
};

var tsLoaderOptions = {
  // We use transpileOnly because it's much faster. We still typecheck, but not in webpack
  // because it slows down watch/dev-server mode
  transpileOnly: mode.IS_WATCH,
  compilerOptions: {
    noEmit: false,
  },
};

var jsLoaders = [
  'babel?' + JSON.stringify(babelLoaderOptions),
  'ts?' + JSON.stringify(tsLoaderOptions),
];

module.exports.push({
  test: /\.tsx$/,
  exclude: /node_modules/,
  loaders: jsLoaders
});

var sassLoaders;
var cssLoaderOptions = {
  modules: true,
  importLoaders: 2
};
var sassLoaderOptions = {};

if (mode.IS_DEV) {
  cssLoaderOptions.sourceMap = true;
  sassLoaderOptions.sourceMap = true;
}

if (mode.IS_HOT) {
  sassLoaders = [
    'style',
    'css?' + JSON.stringify(cssLoaderOptions),
    'postcss',
    'sass?' + JSON.stringify(sassLoaderOptions)
  ].join('!');
} else {
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  sassLoaders = ExtractTextPlugin.extract('style', [
    'css?' + JSON.stringify(cssLoaderOptions),
    'postcss',
    'sass?' + JSON.stringify(sassLoaderOptions)
  ].join('!'));
}

module.exports.push({
  test: /\.scss|\.css$/,
  loader: sassLoaders
});

var filename = 'assets/[name].[ext]';
if (mode.IS_PROD) {
  filename = 'assets/[name].[hash].[ext]';
}

var urlLoaderOptions = {
  limit: 10000,
  name: filename
};

module.exports.push({
  test: /\.(woff2?|eot|ttf|svg|png|jpg|jpeg|gif)/i,
  loader: 'url?' + JSON.stringify(urlLoaderOptions)
});
