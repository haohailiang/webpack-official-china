const path = require('path');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    app:'./src/js/index.js',
    print:'./src/js/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        include: srcPath
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
        include: srcPath
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ],
        include: srcPath
      }
    ]
  }
}; 