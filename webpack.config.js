var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets')
  },
  devServer: {
    publicPath: '/assets/',
    compress: true
  }
};
