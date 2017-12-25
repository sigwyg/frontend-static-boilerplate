/**
 * for develop/production
 *
 * Note:
 *  1. 開発・本番の共通設定
 */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
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
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CleanWebpackPlugin(['dist']),
    new CopyPlugin([
      { from: 'src/img', to: 'img' },
      { from: 'src/fonts', to: 'fonts' }
    ]),
  ],
});
