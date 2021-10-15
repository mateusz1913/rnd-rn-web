import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import type webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import commonConfig from './webpack.common';

const appDirectory = path.resolve(__dirname, '../');

const config: webpack.Configuration = webpackMerge(commonConfig, {
  mode: 'development',
  output: {
    path: path.join(appDirectory, 'dist'),
    filename: 'index.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './template.html'),
    }),
  ],
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(appDirectory, 'public'),
    },
    historyApiFallback: true,
    hot: true,
  },
});

export default config;
