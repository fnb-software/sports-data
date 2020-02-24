const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './frontend/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sports Data',
    }),
  ],
  output: {
    filename: 'sportsData.js',
    path: path.resolve(__dirname, 'build/static'),
  },
};
