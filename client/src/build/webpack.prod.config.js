//在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const paths = {
  DIST: path.resolve(__dirname, '..','dist'),
  APP: path.resolve(__dirname, '..','app'),
  SRC: path.resolve(__dirname, '..','src')
 
}

let config = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        //可以继续优化
        //
        //
        //
        //css 分割
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['style-loader', 'css-loader', 'postcss-loader',"less-loader" ]
        })
      }
    ]
  },
	plugins: [
    new UglifyJSPlugin({
      cache: true,
      parallel: true
    }),
    new ExtractTextPlugin("styles.css")
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
}


module.exports = merge(common, config);