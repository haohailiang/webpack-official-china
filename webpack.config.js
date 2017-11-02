const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Create multiple instances
const extractCSS = new ExtractTextPlugin('[name]-css.css');
const extractLESS = new ExtractTextPlugin('[name]-less.css');

module.exports = {
  entry: './src/js/moduleA.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader' ])
      },
      {
        test: /\.less$/i,
        use: extractLESS.extract([ 'css-loader', 'less-loader' ])
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'less加载器-css单独文件的抽离'
    }),
    extractCSS,
    extractLESS
  ]
};
