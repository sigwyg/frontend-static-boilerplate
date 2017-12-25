/**
 * for development
 *
 * Usage:
 *  $ yarn start
 *
 * Note:
 *  1. webpack-dev-serverが起動する
 *  2. メモリ上に展開されるので、実ファイルは保存されない
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const StylelintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  output: {
    publicPath: '/'
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3355',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'dist/',
    historyApiFallback: true,
    port: 3355,
    hot: true,
    inline: true,
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new StylelintPlugin({
      configFile: '.stylelintrc',
      files: 'src/**/*.css',
      formatter: require('stylelint-formatter-pretty'),
      emitErrors: true,
      failOnError: false,
      quiet: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?sourceMap',
          'postcss-loader?sourceMap=inline',
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: "[path][name].[ext]",
              limit: 100
            }
          }
        ]
      },
    ]
  }
});
