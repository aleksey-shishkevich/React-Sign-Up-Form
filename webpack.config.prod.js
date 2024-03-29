const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  target: "node",
  entry: [
	'whatwg-fetch',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: './'
  },
  plugins: [
    /**
     * This plugin assigns the module and chunk ids by occurence count. What this
     * means is that frequently used IDs will get lower/shorter IDs - so they become
     * more predictable.
     */
    new webpack.optimize.OccurrenceOrderPlugin(),
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
     * See description in 'webpack.config.dev' for more info.
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    /**
     * Some of you might recognize this! It minimizes all your JS output of chunks.
     * Loaders are switched into a minmizing mode. Obviously, you'd only want to run
     * your production code through this!
     */
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      { 
	    test: /\.json$/, 
	    exclude: [/server/],
	    loader: "json-loader"},
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/, /styles/, /server/, /dist/, /dist_dev/],
        include: path.join(__dirname, 'src')
      },
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
  }
};
