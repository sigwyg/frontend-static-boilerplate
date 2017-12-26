/**
 * for production
 *
 * Usage:
 *  $ yarn deploy
 *
 * Note:
 */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

module.exports = merge(common, {
  output: {
    publicPath: './'
  },
  entry: [
    './src/main.js'
  ],
  plugins: [
    new ExtractTextPlugin({
        filename: '[name]-[hash].css',
        allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compressor: { warnings: false },
      output: { comments: false }
    }),
    new LicenseWebpackPlugin({
      pattern: /^(.*)$/,
      filename: 'licenses.txt'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            },
            'postcss-loader',
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "img/",
              publicPath: './',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
            }
          },
        ]
      },
      {
        test: /\.(woff|eot|ttf|)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "fonts/",
              publicPath: './',
            }
          },
        ]
      },
    ]
  },
});
