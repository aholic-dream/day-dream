const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, '..','dist'),
  APP: path.resolve(__dirname, '..','app'),
  SRC: path.resolve(__dirname, '..','src')
 
}
let config = {
  entry: {
    app: paths.APP
  },  
  output: {
    path: paths.DIST,
    chunkFilename: '[name].bundle.js',
    filename: 'app.bundle.js'
  },
  resolve: {
    //拓展不需要加后缀的文件类型
    extensions: ['.js', '.json','jsx'],
    //文件夹别名
    alias: {
      '@': './src'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
	plugins: [
    
  ],
  target:"web",
}

module.exports = config