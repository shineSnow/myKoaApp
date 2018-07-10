const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: '[name].bundle.js'
  },
  target:'node',
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        include:path.resolve(__dirname,'./src'),
        loader:'babel-loader'
      }
    ]
  }
}