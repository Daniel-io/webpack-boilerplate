const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');


// Load environment variables from .env file
const env = dotenv.config().parsed || {};


// Format variables for DefinePlugin
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});


module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Use CSS and Style loaders to bundle CSS
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys) // 🔥 Add this line to inject env variables
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve static files from the dist folder
    },
    compress: true,
    port: 9000,
    open: true,
    watchFiles: ['src/**/*'],
  },
};
