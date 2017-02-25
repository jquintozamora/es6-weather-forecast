///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack Development Config
///////////////////////////////////////////////////////////////////////////////////////////////////
//  author: Jose Quinto - https://blogs.josequinto.com
//
///////////////////////////////////////////////////////////////////////////////////////////////////
let resolve = require('path').resolve;
let webpack = require('webpack');

module.exports = {
  // Best way to learn all webpack options: https://github.com/webpack/webpack/blob/v1.13.3/lib/WebpackOptionsApply.js
  // Use target = web to optimize the bundle for web sites
  target: 'web',
  // Use devtool to enhance the debugging process. 
  //    More info: https://webpack.js.org/configuration/devtool/ 
  //               and https://webpack.github.io/docs/build-performance.html#sourcemaps
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'app': [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server', //doesn’t reload the browser upon syntax errors, 'webpack/hot/dev-server' does!
      './app/src/main.js'
    ]
  },
  output: {
    path: resolve(__dirname, './../dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  devServer: {
    // All options here: https://webpack.js.org/configuration/dev-server/

    // enable HMR on the server
    hot: true,
    // match the output path
    contentBase: resolve(__dirname, './../dist'),
    // match the output `publicPath`
    publicPath: '/static/',

    // Enable to integrate with Docker
    //host:"0.0.0.0",

    port: 3000,
    historyApiFallback: true,
    // All the stats options here: https://webpack.js.org/configuration/stats/
    stats: {
      colors: true, // color is life
      chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
      'errors-only': true
    }
  },
  plugins: [
    // See full list: https://github.com/webpack/docs/wiki/list-of-plugins

    /**
     * This is where the magic happens! You need this to enable Hot Module Replacement!
     */
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin()
  ],
  watchOptions: {
    poll: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',                                   // Use loader instead loaders to be compatible with the next version, webpack 2
        include: resolve(__dirname, './../app/src')          // Use include instead exclude to improve the build performance
      },
      {
        test: /\.scss$/i,
        include: resolve(__dirname, './../app/stylesheets'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              minimize: false
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true              
            }
          }
        ]
      }

    ]
  }
};
