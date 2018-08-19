const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const contents = ['index'];

const config = {
  mode: 'production',
  entry: {
    'js/app.min.js': './src/js/app.js',
    'css/style.min.css': './src/css/style.css'
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name]'
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
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        }, {
          loader: 'postcss-loader'
        }]
      })
    }, {
      test: /\.pug$/,
      loader: 'pug-loader'
    }, {
      test: /\.(?:jpe?g|png|gif|svg|ico)(?:\?.+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '../img/[name].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new MinifyPlugin(),
    new ExtractTextPlugin('[name]'),
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
