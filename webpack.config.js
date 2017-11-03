const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    moduleA:'./src/js/moduleA.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:4].bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
  },
  plugins: [
    //创建了两个HtmlWebpackPlugin的实例，生成两个页面
    new HtmlwebpackPlugin({
      title: '肩负3项使命',
    })
  ],
  devServer: {
    contentBase: "./src",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    port:3001,
    inline: true//实时刷新
  } 
};