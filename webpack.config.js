const styleLintPlugin = require('stylelint-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const path = require('path');


// plugins
// Lint Css
const cssStyleLint = new styleLintPlugin({files: '**/*.css'});
// htmlPlugin
const htmlPlugin = new htmlWebpackPlugin({
  template: './index.html'
});


const config = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: './dist/[name].js'
  },
  devtool: 'eval-source-map',
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
        loaders: [
          'style',
          'css?modules&localIdentName=[name]__[local]____[hash:base64:5]',
          'postcss'
        ] // ← loaders working bottom to top
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
    cssStyleLint,
    htmlPlugin
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};

module.exports = validate(config);
