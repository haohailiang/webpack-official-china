const path = require('path');
const webpack = require("webpack");
const htmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    mainA: './src/js/mainA.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[hash:5].bundle.js",
  },
  plugins: [
    //创建了两个HtmlWebpackPlugin的实例，生成两个页面
    new htmlwebpackPlugin({
      title: 'tree-shaking'
    })
  ],
};