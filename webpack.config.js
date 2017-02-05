var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var TARGET = process.env.npm_lifecycle_event;
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);


var common = {
  entry: path.resolve(ROOT_PATH, 'app/main.jsx'),
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      include: path.resolve(ROOT_PATH, 'app')
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Kanban app'
    })
  ]
};


if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: path.resolve(ROOT_PATH, 'app')
      }]
    },
    devServer: {
      port: 8080,
      colors: true,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlwebpackPlugin({
        title: 'Kanban app'
      })
    ]
  });
}
