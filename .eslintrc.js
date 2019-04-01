module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': ['react'],
    'rules': {
        "no-unused-vars": "off", // 允许有声明后未被使用的变量或参数
        "no-console": "off", // 允许有console语句
        'accessor-pairs': 'error', // 禁止在对象中使用getter/setter
        'array-bracket-newline': 'error', // 打开数组括号后必须强制换行
        'array-bracket-spacing': [
            'error',
            'never'
        ], // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        'array-callback-return': 'error', // Array执行回调函数必须返回语句
        'block-scoped-var': 'error', // 在块级作用域外访问块内定义的变量是否报错提示
        'brace-style': 'error', // // if while function 后面的{必须与if在同一行，java风格
        'camelcase': 'error', // 双驼峰命名方式
        'react/no-direct-mutation-state': 'error', // 禁止直接修改 this.state
        'react/no-array-index-key': 'error', // 禁止
        'react/no-typos': 'error',// 禁止拼写错误
    }
};