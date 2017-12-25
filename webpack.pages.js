/**
 * for common
 *
 * Note: テンプレートページの登録
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'View | Frontend Static Boilerplate',
      description: 'Viewのページ',
      heading1: 'View',
      template: 'ejs-compiled-loader!src/templates/view.ejs',
      filename: 'view.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Frontend Static Boilerplate',
      description: 'Frontend Static Boilerplate',
      heading1: 'Top Page',
      template: 'ejs-compiled-loader!src/templates/index.ejs',
      filename: 'index.html'
    }),
  ]
}
