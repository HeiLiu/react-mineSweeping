const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizaCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// const packageJson = require('./package');
// const { version: VERSION, name } = packageJson;

// console.log(process.env.NODE_ENV, VERSION);
const { NODE_ENV } = process.env;

let config = {
  entry: ['./src/index.js'], // 打包入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  }, // 打包输出文件
  devServer: {
    contentBase: './dist',
    port: '3000',
    host: 'localhost',
  },
  // externals: {
  //   react: 'react',
  //   'react-dom': 'react-dom',
  // }, // 不要遵循/打包这些模块，而是在运行时从环境中请求他们
  resolve: {
    // 项目全局范围内 重命名一些常用路径
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
    },
  },
  module: {
    rules: [
      {
        // 这里的 style-loader 和 css-loader 的顺序是不能反 use 顺序是从后向前，所以会先使用 css-loader转换，再使用 style-loader 插入
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader }, // 分离 css 文件
          // { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName:
                  NODE_ENV === 'development'
                    ? '[name]_[local]'
                    : '[hash:base32]',
              }, //TODO 生成的模块命名 根据不同的环境按不同规则编译
              importLoaders: 0, // 在 css-loader前应用的 loader 的数量
            },
          },
        ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
  optimization: {
    minimizer: [new OptimizaCssAssetsWebpackPlugin()],
    // minimize: true,
  },
};

module.exports = config;
