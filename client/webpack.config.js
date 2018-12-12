const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  APP: path.resolve(__dirname, 'src/app'),
  SRC: path.resolve(__dirname, 'src')
}

let config = {
  entry: {
    app: paths.APP
  },
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
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
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'swk',
      template: './index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'src/static')],
    hot: true,
    compress: false,
    port: 8080,
    // 浏览器仅显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    quiet: true,
    clientLogLevel: "error"
  },
  stats: "errors-only"
}

module.exports = config