const path = require('path');
const webpack = require("webpack");
const htmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    mainA: './src/js/mainA.js',
    mainB: './src/js/mainB.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[hash:5].bundle.js",
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js",
      minChunks: 2,
    }),
    //创建了两个HtmlWebpackPlugin的实例，生成两个页面
    new htmlwebpackPlugin({
      title: '文件按顺序打包在一起'
    })
  ],
};