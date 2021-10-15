import path from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import FontminPlugin from 'fontmin-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import type webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import commonConfig from './webpack.common';

const appDirectory = path.resolve(__dirname, '../');

const config: webpack.Configuration = webpackMerge(commonConfig, {
  mode: 'production',
  output: {
    path: path.join(appDirectory, 'dist'),
    filename: 'index.[contenthash].bundle.js',
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin() as webpack.WebpackPluginInstance,
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './template.html'),
        minify: {
          // Minify config;
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
        },
      }),
    ],
  },
  plugins: [ new CleanWebpackPlugin(), new FontminPlugin({ autodetect: true }) ],
});

export default config;
