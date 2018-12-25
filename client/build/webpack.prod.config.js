//在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let config = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        exclude: [path.resolve(__dirname, '../src/components/UI')],
        //css 文件大于250kb 在考虑
        //css 分割 css-split-webpack-plugin'
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: [
            {
              loader:'css-loader',
              options: { 
                //css-loader中importLoaders选项的作用是用于配置css-loader作用于 @import 的资源之前需要经过其他loader的个数
                importLoaders: 2,
                modules: true,
                localIdentName: '_[hash:base64:5]'
              }
            }, 
            'postcss-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.(css|less)$/,
        include: path.resolve(__dirname, '../src/components/UI'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: [
            {
              loader:'css-loader',
              options: { 
                //css-loader中importLoaders选项的作用是用于配置css-loader作用于 @import 的资源之前需要经过其他loader的个数
                importLoaders: 2
              }
            }, 
            'postcss-loader',
            'less-loader'
          ]
        })
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
      favicon:'./favicon.ico',
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
  // TODO: 需优化！！
  optimization: {
    
  },
  stats:"errors-only"
}


module.exports = merge(common, config);