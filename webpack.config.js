const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    moduleA:'./src/js/moduleA.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "http://www.baidu.com/dist/",
    filename: '[name].bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: '发布文件路径设置'
    })
  ]
};