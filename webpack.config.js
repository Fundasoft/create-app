const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const { SourceMapDevToolPlugin } = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    demo: './app/client/demo.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    filename: isProduction ? '[name].[chunkhash:8].js' : '[name].js',
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[chunkhash:8].css' : '[name].css',
      chunkFilename: isProduction ? '[id].[chunkhash:8].css' : '[id].css',
    }),
    new WebpackManifestPlugin(),
    new SourceMapDevToolPlugin({
      test: /\.js$/,
      filename: isProduction ? '[name].[chunkhash:8].js.map' : '[name].js.map',
      exclude: /vendor.*/, // not working
    }),    
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                ],
              },
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
