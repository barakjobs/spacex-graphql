const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pathnameResolve = (aliasesPath) => path.resolve(__dirname, `../src/${aliasesPath}`);

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    polyfils: './core/polyfills/polyfills.ts',
    app: './index.tsx',
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[hash]-[name].bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.css', '.scss', '.ts', '.tsx', '.js', '.jsx', '.json', '.d.ts'],
    alias: {
      '@api': pathnameResolve('./api'),
      '@namespace': pathnameResolve('./core/typings'),
      '@containers': pathnameResolve('./containers'),
      '@components': pathnameResolve('./components'),
      '@shared': pathnameResolve('./components/shared'),
      '@utils': pathnameResolve('./utils'),
      '@secure-console': pathnameResolve('./utils/secure-console'),
      '@hooks': pathnameResolve('./hooks'),
      '@routes': pathnameResolve('./routes'),
      '@actions': pathnameResolve('./store/actions'),
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: ['babel-loader', 'eslint-loader'] },
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000000000,
          name: 'images/[hash]-[name].[ext]',
          esModule: false,
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: 'video/[hash]-[name].[ext]',
          esModule: false,
          limit: 1000000000,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '.',
            name: 'assets/fonts/[hash]-[name].[ext]',
            mimetype: '[ext]',
            esModule: false,
            limit: 1000000000,
          },
        },
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/images/[hash]-[name].[ext]',
            esModule: false,
            limit: 1000000000,
          },
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
    new webpack.ProvidePlugin({
      secureConsole: ['@secure-console', 'secureConsole'],
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
};
