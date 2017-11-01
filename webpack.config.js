const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: '按需加载代码'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name]-chunkFilename.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};