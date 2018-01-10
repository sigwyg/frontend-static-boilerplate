/**
 * for common
 *
 * Note: テンプレートページの登録
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Frontend Static Boilerplate',
      description: 'Frontend Static Boilerplate',
      heading1: 'Top Page',
      template: 'src/templates/index.ejs',
      filename: 'index.html',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackPlugin({
      title: 'View | Frontend Static Boilerplate',
      description: 'Viewのページ',
      heading1: 'View',
      template: 'src/templates/view/index.ejs',
      filename: 'view/index.html',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
}
