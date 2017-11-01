const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: {
    moduleA:'./src/js/moduleA.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: '压缩混淆JS文件'
    }),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
};
