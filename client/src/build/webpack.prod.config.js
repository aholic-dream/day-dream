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
        //css 文件大于250kb 在考虑
        //css 分割 css-split-webpack-plugin'
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'postcss-loader','less-loader']
        })
      }
    ]
  },
	plugins: [
    new HtmlWebpackPlugin({
      title: 'generator',
      template: './index.html',
      minify: true
    }),
    new UglifyJSPlugin(),
    new ExtractTextPlugin({
      filename:"styles.css",
      allChunks:true
    })
  ],
  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 250000
  },
  optimization: {
    
  },
  stats:"errors-only"
}


module.exports = merge(common, config);