var path = require('path');

module.exports = {
  entry: ["babel-polyfill", './app/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            [ 'es2015', { modules: false} ]
          ]
        }
      }
    ]
  },
  devServer: {
    publicPath: '/assets/',
    compress: true
  }
};
