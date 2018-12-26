const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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

var publicPathsToClean = [
  '/public',
  '/src/public'
];

var adminPathsToClean = [
  '/src/wp-content/portfolio2019/js',
  '/src/wp-content/portfolio2019/css',
  '/admin/wp-content'
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
    path: __dirname + "/src/public",
    filename: "js/app.js"
  },
  module: {
      rules: extractedCSSModuleRules
  },
  plugins: [
    new CleanWebpackPlugin(publicPathsToClean),
    new ExtractTextPlugin('css/styles.css'),
    new CopyWebpackPlugin([{ from: __dirname + '/src/public/', to:  __dirname + '/public/' }])
  ],
});

var adminConfig = Object.assign({}, config, {
  name: "adminConfig",
  entry:{  app: [__dirname + "/src/entry/admin.js"]},
  output: {
    path: __dirname + "/src/wp-content/themes/portfolio2019",
    filename: "js/admin.js"
  },
  module: {
      rules: extractedCSSModuleRules
  },
  plugins: [
    new CleanWebpackPlugin(adminPathsToClean),
    new ExtractTextPlugin('css/admin.css'),
    new CopyWebpackPlugin([{ from: __dirname + '/src/wp-content', to:  __dirname + '/admin/wp-content/' }])
  ],
});

module.exports = [
  publicConfig, adminConfig
];
