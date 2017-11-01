const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    moduleA: './src/js/moduleA.js',
    moduleB: './src/js/moduleB.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: '公共代码的抽离'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'base' // 指定公共 bundle 的名称。
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        include: srcPath
      }
    ]
  }
};