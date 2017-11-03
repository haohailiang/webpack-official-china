const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const temp_path = path.resolve(__dirname, 'src/temp');

module.exports = {
  entry: {
    moduleA:'./src/js/moduleA.js',
    moduleB:'./src/js/moduleB.js',
    vendors:['jquery']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
  },
  plugins: [
    //创建了两个HtmlWebpackPlugin的实例，生成两个页面
    new HtmlwebpackPlugin({
      title: '多页面应用模板A',
      template: path.resolve(temp_path, 'tempA.html'),
      filename: 'moduleA.html',
      //chunks这个参数告诉插件要引用entry里面的哪几个入口
      chunks: ['moduleA', 'vendors'],
      //要把script插入到标签里
      inject: 'body'
    }),
    new HtmlwebpackPlugin({
      title: '多页面应用模板B',
      template: path.resolve(temp_path, 'tempB.html'),
      filename: 'moduleB.html',
      chunks: ['moduleB', 'vendors'],
      inject: 'body'
    })
  ]
};