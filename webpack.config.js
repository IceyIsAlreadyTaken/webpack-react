
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 让 webpack 知道以哪个模块为入口，做依赖收集
    entry: path.resolve(__dirname, './src/index.js'),
    // 告诉 webpack 打包好的文件存放在哪里，以及怎么命名
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
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
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src/')
            }
        ]
    },
    plugins: [
        // 这里我们通常想要指定自己的 html 文件模板，也可以指定生成的 html 的文件名
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        })
    ]
};