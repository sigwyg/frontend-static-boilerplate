/**
 * for develop/production
 *
 * Note:
 *  1. 開発・本番の共通設定
 */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const pages = require('./webpack.pages.js');

module.exports = merge(pages, {
  output: {
    path: path.resolve('dist'),
    filename: '[name]-[hash]-bundle.js',
  },
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ejs$/,
        use: 'ejs-compiled-loader'
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CleanWebpackPlugin(['dist']),
  ],
});
