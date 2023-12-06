// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack')
const dotenv = require('dotenv');

module.exports = (env, options) => {

  const { DEV } = env;

  if (DEV == "dev") {
    require('dotenv').config({path: './.env.dev'})
  } else if (DEV == "local") {
    require('dotenv').config({path: './.env.local'})
  }
  
  return {
    mode: 'development',
    target: 'web',

    entry: {
      main: '/src/index.jsx',
    },

    devServer: { 
      port: process.env.REACT_APP_PORT,
      static: path.resolve(__dirname, 'dist'),
      historyApiFallback: true,
      hot: true,  
    },

    output: {
      filename: 'js/main.[contenthash].js',
      chunkFilename: 'js/main.[id].[contenthash].js',
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader", 
        }
      ],
    },

    resolve: { 
      extensions: ['.jsx', '.js'],
    },

    plugins: [
      new CopyPlugin({
        patterns: [
          {
            context: 'src/static',
            from: '**/*',
            globOptions: {
              ignore: ['**/index.html'],
            },
          },
        ],
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, 'src/static/index.html'),
      }),
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(process.env.REACT_APP_BACKEND_URL),
        BACKEND_PORT: JSON.stringify(process.env.REACT_APP_BACKEND_PORT),
        BACKEND_CONTEXT_PATH: JSON.stringify(process.env.REACT_APP_BACKEND_CONTEXT_PATH)
      }),
    ],
  }
}