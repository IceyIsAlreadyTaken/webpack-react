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
        "no-unused-vars": "off", // 不能有声明后未被使用的变量或参数
        "no-console": "off", // 不能有console语句
        'react/no-array-index-key': 'error',
        'accessor-pairs': 'error', // 在对象中使用getter/setter
        'array-bracket-newline': 'error', // 打开数组括号后强制换行
        'array-bracket-spacing': [
            'error',
            'never'
        ], //指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        'array-callback-return': 'error',
        'block-scoped-var': 'error', // 在块级作用域外访问块内定义的变量是否报错提示
        'brace-style': 'error', // // if while function 后面的{必须与if在同一行，java风格
        'camelcase': 'error', // 双驼峰命名方式
    }
};