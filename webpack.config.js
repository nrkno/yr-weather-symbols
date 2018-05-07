const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/docs/index.html',
      inlineSource: '.css$'
    }),
    new HtmlWebpackInlineSVGPlugin({ runPreEmit: true }),
    new HtmlWebpackInlineSourcePlugin(),
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new CopyWebpackPlugin([{from: 'dist/png/100', to: 'png/100'}])
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
  },
  entry: { preview: './src/docs/index.tsx' },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
  },

  mode: isProd ? 'production': 'development'
};
