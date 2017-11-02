const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/moduleA.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'url-loader limit限制'
    }),
  ]
};
