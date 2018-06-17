var path = require('path');

module.exports = {
  entry: ["babel-polyfill", './app/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets')
  },
  resolve: {
    modules: [path.resolve(__dirname, "app"), "node_modules"]
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            [ 'es2015', { modules: false} ],
            ['stage-0'],
          ],
          plugins: ['transform-react-jsx']
        }
      }
    ]
  },
  devServer: {
    publicPath: '/assets/',
    compress: true,
    historyApiFallback: true
  }
};
