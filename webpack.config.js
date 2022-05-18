const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const { SourceMapDevToolPlugin } = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const vendor = [
  'react',
  'react-dom',
  'axios',
  'serialize-javascript',
];

module.exports = {
  entry: {
    vendor,
    demo: './app/client/demo.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: isProduction ? '[name].[chunkhash:8].js' : '[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[chunkhash:8].css' : '[name].css',
      chunkFilename: isProduction ? '[id].[chunkhash:8].css' : '[id].css',
    }),
    new WebpackManifestPlugin(),
    new SourceMapDevToolPlugin({
      filename: isProduction ? '[name].[chunkhash:8].js.map' : '[name].js.map',
      exclude: ['vendor.js']
    }),    
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          }
        ],
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
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
};
