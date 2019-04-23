
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    // devtool: 'source-map',
    // 让 webpack 知道以哪个模块为入口，做依赖收集
    entry: { index: path.resolve(__dirname, './src/index.js') },
    // 告诉 webpack 打包好的文件存放在哪里，以及怎么命名
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]-[hash].js' // 这里的name就是index
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            exclude: /\.min\.js$/, // 过滤掉以".min.js"结尾的文件，我们认为这个后缀本身就是已经压缩好的代码，没必要进行二次压缩
            cache: true,
            parallel: true, // 开启并行压缩，充分利用cpu
            sourceMap: false,
            extractComments: false, // 移除注释
            uglifyOptions: {
                compress: {
                    unused: true,
                    warnings: false,
                    drop_debugger: true
                },
                output: {
                    comments: false
                }
            }
        }), new OptimizeCSSAssetsPlugin({})],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src/')
            },
            {
                test: /\.(sass|scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: process.env.NODE_ENV === 'development'
                    }

                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]' // name是样式文件名
                    }
                }, {
                    loader: 'sass-loader'
                }],
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src/')
            }
        ]
    },
    plugins: [
        // 这里我们通常想要指定自己的 html 文件模板，也可以指定生成的 html 的文件名
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css',
            chunkFilename: '[id].css'

        })

    ]
};