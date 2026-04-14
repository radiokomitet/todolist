const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: { loader: 'babel-loader' }
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"], // Dodaj to!
    },
  ]
},

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/todolist/',
  },
};