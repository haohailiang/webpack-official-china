const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

var onlineFlagPlugin = new webpack.DefinePlugin({
  __ONLINE__: JSON.stringify(JSON.parse(process.env.ONLINE || 'false'))
});

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
      title: '生成测试线上2套代码'
    }),
    devFlagPlugin,
    onlineFlagPlugin
  ],
};
