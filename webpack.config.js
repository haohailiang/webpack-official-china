const path = require('path');
const webpack = require('webpack');
const { WebPlugin, AutoWebPlugin } = require('web-webpack-plugin');

module.exports = {
  entry: {
    mainA: './src/js/mainA.js',
    mainB: './src/js/mainB.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:5].bundle.js',
  },
  devServer: {
    host: process.env.HOST, // Defaults to `localhost`
    port: 8090, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true,
    },
    hotOnly: true, //HMR
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: 'eslint-loader',
        options: {
          quiet: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
  plugins: [
    // 一个WebPlugin对应生成一个html文件
    new WebPlugin({
      //输出的html文件名称
      filename: 'index.html',
      //这个html依赖的`entry`
      // requires: ['mainA'],
      // requires: {
      //   mainA:{
      //      _ie:true,
      //   }
      // },
      // html模版文件路径（相对于webpack.config.js的完整路径）
      template: './src/template/template.html',
      requires: ['mainA', 'mainB'],
    }),
    new webpack.HotModuleReplacementPlugin(), //HMR --hot
  ],
};
