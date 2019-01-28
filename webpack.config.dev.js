const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
	'whatwg-fetch',  
    'eventsource-polyfill', // necessary for hot reloading with IE
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist_dev'),
    filename: '[name]-[hash].js',
    publicPath: './'
  },
  plugins: [
	new WebpackCleanupPlugin({exclude: ["index.html", "img", "img/*"],}),
    /**
     * This is where the magic happens! You need this to enable Hot Module Replacement!
     */
    new webpack.HotModuleReplacementPlugin(),
    /**
     * NoErrorsPlugin prevents your webpack CLI from exiting with an error code if
     * there are errors during compiling - essentially, assets that include errors
     * will not be emitted. If you want your webpack to 'fail', you need to check out
     * the bail option.
     */
    new webpack.NoErrorsPlugin(),
    /**
     * This is a webpack plugin that simplifies creation of HTML files to serve your
     * webpack bundles. This is especially useful for webpack bundles that
     * include a hash in the filename which changes every compilation.
     */
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      title: 'Discovery',
      inject: 'body'
    }),
    /**
     * DefinePlugin allows us to define free variables, in any webpack build, you can
     * use it to create separate builds with debug logging or adding global constants!
     * Here, we use it to specify a development build.
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: [/node_modules/, /styles/, /server/],
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.json$/, loader: 'json-loader'},
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.scss','.js', '.json']
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
