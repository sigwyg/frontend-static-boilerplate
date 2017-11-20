const path = require('path')
const webpack = require('webpack')
const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BASE_PLUGINS = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new HtmlWebpackPlugin({
    title: 'View',
    template: 'src/templates/view.ejs',
    filename: 'view.html'
  }),
  new HtmlWebpackPlugin({
    title: 'Index',
    template: 'src/templates/index.ejs',
    filename: 'index.html'
  }),
  new ExtractTextPlugin('[name]-[hash].css', { allChunks: true }),
]

module.exports = {
  entry: process.env.NODE_ENV === 'production'
  ? [
    './src/main.js'
  ]
  : [
    'webpack-dev-server/client?http://localhost:3355',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js?[hash]',
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist/',
    historyApiFallback: true,
    port: 3355,
    hot: true
  },
  plugins: process.env.NODE_ENV === 'production'
  ? BASE_PLUGINS.concat([
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
  ])
  : BASE_PLUGINS.concat([
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]),
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: 'ejs-compiled-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: process.env.NODE_ENV === 'production'
        ? ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [
              'css-loader',
              'postcss-loader?sourceMap=inline'
            ]
          })
        : [
          'style-loader',
          'css-loader',
          'postcss-loader?sourceMap=inline'
        ]
      }
    ]
  }
}
