
## 手动搭建你的react项目
### 1.创建项目目录
```
mkdir webpack-react
cd webpack-react
npm init
```


### 2.安装依赖
安装react
```
yarn add react react-dom
```
安装webpack
```
yarn add webpack webpack-cli webpack-dev-server --dev
```
安装编译插件  
```@babel/x```插件是为了让 webpack 能够使用 babel 编译 es6/7/8 和 jsx 的语法
```
yarn add @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin --dev
```
### 3.配置webpack
webpack.config.js
```

const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    }
};
```
### 4.配置beble
.babelrc 
```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```
### 5.配置多页面
安装```html-webpack-plugin```
```
yarn add html-webpack-plugin --dev
```

修改webpack.config.js
```
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
                test: /\.(js|jsx)?$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
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
```
### 6.书写react代码
### 7.编写启动脚本
修改```package.json```
```
{
  "name": "wepack-react",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production  --config webpack.config.js",
    "start": "webpack-dev-server --open --hot"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^16.8.4",
    "react-dom": "^16.8.4"
  },
  "devDependencies": {
    "@babel/core": "^7.3.4",
    "@babel/preset-env": "^7.3.4",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.5",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.2.1"
  }
}
```
### 8.done
```yarn run build ``` 打包  
```yarn run start ``` 启动热更新

### 9.配置eslint
安装eslint，eslint-plugin-react（eslint不识别jsx语法，需要eslint-react-plugin支持）
```
yarn add eslint eslint-plugin-react --dev
```
生成.eslintrc.js配置文件
```
./node_modules/.bin/eslint --init
```
在开发编辑器中安装eslint插件，使用vscode编辑器请安装eslint插件  

