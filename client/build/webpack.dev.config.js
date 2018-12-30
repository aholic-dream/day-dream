//实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost serverconst path = require('path')
const path = require('path')
const WebpackBar = require('webpackbar');
const webpack = require('webpack')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

let config = {
  mode: 'development',
  devtool: 'source-map',
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
              modules: true,
              localIdentName: '[local]--[path][name]_[hash:base64:5]'
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
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      title: 'generator',
      template: './index.html',
      favicon:'./favicon.ico'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBar({
      name:'dev-server'
    })
  ],
  devServer: {
    contentBase: [path.join(__dirname, 'dist')],
    historyApiFallback: true,
    hot: true,
    compress: false,
    port: 8080,
    open: true,
    // 浏览器仅显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false, // 接受 运行在 https 上的服务
      }
    },
    quiet: true,
    clientLogLevel: "error"
  },
  stats:"minimal"
}


module.exports = merge(common, config)