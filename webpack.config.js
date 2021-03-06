const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const contents = ['index']

const PATHS = {
  src: path.join(__dirname, 'src')
}

const config = {
  mode: 'production',
  entry: ['./src/ts/app.ts', './src/css/style.css'],
  output: {
    path: path.resolve(__dirname),
    filename: 'js/app.min.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(?:jpe?g|png|gif|svg|ico)(?:\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: './img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.min.css'
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    })
  ].concat(
    contents.map((name) => {
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
      })
    })
  )
}

module.exports = config
