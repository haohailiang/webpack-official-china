const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/moduleA.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: 
    [
      { test: /\.css$/, 
        use: 
        [ 
          { loader: 'style-loader' }, 
          { loader: 'css-loader?sourceMap' } 
        ]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new HTMLWebpackPlugin({
      title: 'source-map显示css和js的位置'
    }),
  ]
};