const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const wordpressInstall = require('./wordpressInstall');

var babelLoader = {test: /\.js$/, loader: 'babel-loader', exclude:/node_modules/, query: {presets: ['@babel/preset-env']}};
var rawLoader = {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/};
var styleLoader = {test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/};
var scssLoader = {test: /\.scss$/, loader: "style-loader!css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap", exclude: /node_modules/};
var scssLoaderExtracted = {test: /\.scss$/, use: ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: "css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap"
}), exclude: /node_modules/};
var urlLoader = {test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'url-loader'};

var defaultModuleRules = [
  babelLoader,
  rawLoader,
  urlLoader
];

var CSSModuleRules = defaultModuleRules.slice();
CSSModuleRules.push(styleLoader, scssLoader);

var extractedCSSModuleRules = defaultModuleRules.slice();
extractedCSSModuleRules.push(styleLoader, scssLoaderExtracted);

var config = {
  watch: true,
  devtool: 'source-map'
};

var publicConfig = Object.assign({}, config, {
  name: "publicConfig",
  entry:{  app: ['@babel/polyfill', __dirname + "/src/entry/app.js"]},
  output: {
    path: __dirname + "/src/wp-content/themes/medial-earlysign",
    filename: "js/app.js"
  },
  module: {
      rules: extractedCSSModuleRules
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css'),
    new CopyWebpackPlugin([{ from: __dirname + '/src/wp-content', to:  __dirname + wordpressInstall + '/wp-content/' }])
  ],
});

var adminConfig = Object.assign({}, config, {
  name: "adminConfig",
  entry:{  app: [__dirname + "/src/entry/runTime.js"]},
  output: {
    path: __dirname + "/src/wp-content/themes/medial-earlysign",
    filename: "js/runTime.js"
  },
  module: {
      rules: extractedCSSModuleRules
  },
  plugins: [
    new ExtractTextPlugin('css/run-time.css'),
    new CopyWebpackPlugin([{ from: __dirname + '/src/wp-content', to:  __dirname + 'admin/wp-content/' }])
  ],
});

module.exports = [
  publicConfig, adminConfig
];
