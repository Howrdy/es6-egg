import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: ['./app/app.js'],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js$/, // JS & JSX
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
