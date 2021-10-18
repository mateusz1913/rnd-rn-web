import path from 'path';

import webpack from 'webpack';

const appDirectory = path.resolve(__dirname, '../');

const config: webpack.Configuration = {
  entry: [
    // Entries that need to be included, e.g. some polyfills and main entry;
    path.resolve(__dirname, './polyfills.js'),
    path.join(appDirectory, 'index.web.js'),
  ],
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {},
      },
      __DEV__: process.env.NODE_ENV !== 'production',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules[/\\](?!react-native-vector-icons|react-native-reanimated|react-native-gesture-handler)/, // <- here add excluded modules
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            configFile: false,
            plugins: [
              // Here add all babel plugins;
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-nullish-coalescing-operator',
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-syntax-class-properties',
              'react-native-web',
              // It has to be last in plugin list
              'react-native-reanimated/plugin',
            ],
            presets: [
              // Here add all babel presets (e.g. env preset, react preset, typescript preset etc.);
              [
                '@babel/preset-env',
                {
                  targets: { browsers: [ 'last 2 versions', 'ie >= 11' ]},
                  // If you have some problems with "cannot import 'core-js/modules/...' try to install core-js as dev dependency"
                  corejs: 3,
                  useBuiltIns: 'usage',
                },
              ],
              '@babel/preset-react',
              '@babel/preset-flow',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' },
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-native$': require.resolve('react-native-web'),
    },
    extensions: [ '.web.tsx', '.web.ts', '.web.js', '.tsx', '.ts', '.js' ],
  },
  ignoreWarnings: [
    /Should not import the named export/,
  ],
};

export default config;
