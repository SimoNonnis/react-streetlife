const extractTextPlugin = require('extract-text-webpack-plugin');
const styleLintPlugin = require('stylelint-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const webpack = require('webpack');
const path = require('path');



// plugins
// create css file
const createCssFile = new extractTextPlugin('./main.min.css');
// kill uglify warnings
const killUglifyJsWarnings = new webpack.optimize.UglifyJsPlugin({
  compress: {
    screw_ie8: true,
    warnings: false
  }
});
// optimize the react bundle for production
const optimizeReactForProduction = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
});
// common chunks
const commonChunks = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: Infinity // ← just creates the commons chunk, but no modules into it
});
// OccurenceOrderPlugin
const occurenceOrder = new webpack.optimize.OccurenceOrderPlugin();
// Lint Css
const cssStyleLint = new styleLintPlugin({files: '**/*.css'});
// htmlPlugin
const htmlPlugin = new htmlWebpackPlugin({
  template: './index.html'
});




const config = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: './src/main.js'
  },
  output: {
    path: 'dist',
    filename: './[name].[chunkhash].js'
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: /src/,
        loaders: ['eslint']
      }
    ],
    loaders: [
      {
        test: /\.js$/, // ← Test for ".js" file, if it passes, use the loader
        include: /src/,
        loader: 'babel' // ← Use babel (short for ‘babel-loader’) loads collection of ES6 transforms, JSX for react etc.. from .babelrc file
      },
      {
        test: /\.css$/, // ← Test for ".css" file, if it passes, use the loader
        include: /src/,
        loader: extractTextPlugin.extract(
          'css?modules&localIdentName=[name]__[local]____[hash:base64:5]!postcss' // ← loaders working right to left. ExtractTextPlugin requires use of ! syntax.
        )
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        include: [ path.resolve(__dirname, 'src/images') ],
        loaders: [
          'file?name=./dist/[name].[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }
    ]
  },
  postcss: [
    require('postcss-easy-import')(),
    require('postcss-cssnext')(),
    require('postcss-reporter')()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    createCssFile,
    killUglifyJsWarnings,
    optimizeReactForProduction,
    commonChunks,
    occurenceOrder,
    cssStyleLint,
    htmlPlugin
  ]
};

module.exports = validate(config);
