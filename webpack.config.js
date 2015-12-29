var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: ['./app/app.js'],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/, // JS & JSX
      exclude: /node_modules/,
      loader: 'babel',
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({
      title: 'ES6-Egg Page',
      template: './app/index.html'
    })
  ],

  resolve: {
    extensions: ['', 'js', 'jsx']
  }

};

module.exports = config;
