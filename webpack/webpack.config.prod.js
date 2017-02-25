///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack Production Config
///////////////////////////////////////////////////////////////////////////////////////////////////
//  author: Jose Quinto - https://blogs.josequinto.com
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const resolve = require('path').resolve;
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',
  entry: {
    'app': [
      './app/src/main.js'
    ]
  },
  output: {
    path: resolve(__dirname, './../dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')      // Reduces 78 kb on React library
      }
    }),
    new ExtractTextPlugin({
      filename: '../dist/main.css',
      allChunks: true
    }),

    // Plugings for optimizing size and performance.
    // Here you have all the available by now: 
    //    Webpack 1. https://github.com/webpack/webpack/blob/v1.13.3/lib/optimize
    //    Webpack 2. https://github.com/webpack/webpack/tree/master/lib/optimize
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        drop_debugger: true
      },
      minimize: true,
      debug: false,
      sourceMap: true,
      output: {
        comments: false
      },

    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',                           // User loader instead loader for compatiblity with next WebPack 2
        include: resolve(__dirname, './../app/src')  // Use include instead exclude to improve build performance
      },
      {
        test: /\.scss$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                minimize: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }),
        include: resolve(__dirname, '../app/stylesheets')
      }
    ]
  }
};