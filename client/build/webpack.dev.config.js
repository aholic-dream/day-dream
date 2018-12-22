//实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost serverconst path = require('path')
const path = require('path')
const WebpackBar = require('webpackbar');
const webpack = require('webpack')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  APP: path.resolve(__dirname, 'app'),
  SRC: path.resolve(__dirname, )
}
let config = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { 
              //css-loader中importLoaders选项的作用是用于配置css-loader作用于 @import 的资源之前需要经过其他loader的个数
              importLoaders: 2,
              modules:true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },{
            loader: 'postcss-loader',
            //options:{path: './src/build/postcss.config.js'}
          },
          "less-loader"
        ]
      }
    ]
  },
	plugins: [
    new HtmlWebpackPlugin({
      title: 'generator',
      template: './index.html',
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBar({
      name:'dev-server'
    })
  ],
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'src/static')],
    hot: true,
    compress: false,
    port: 8080,
    open:true,
    // 浏览器仅显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    quiet: true,
    clientLogLevel: "error"
  },
  stats:"minimal"
}


module.exports = merge(common, config)