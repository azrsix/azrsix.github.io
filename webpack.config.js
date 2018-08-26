const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const contents = ['index'];

const config = {
  mode: 'production',
  entry: ['./src/js/app.js', './src/css/style.css'],
  output: {
    path: path.resolve(__dirname),
    filename: 'js/app.min.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      }, {
        loader: 'postcss-loader'
      }],
    }, {
      test: /\.pug$/,
      loader: 'pug-loader'
    }, {
      test: /\.(?:jpe?g|png|gif|svg|ico)(?:\?.+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: './img/[name].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new MinifyPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/style.min.css'
    })
  ].concat(contents.map((name) => {
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: `src/${name}.pug`,
      inject: false,
      minify: {
        caseSensitive: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true
      }
    });
  }))
};

module.exports = config;
