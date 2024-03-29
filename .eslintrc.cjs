module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/no-namespace': 0,
    'no-continue': 0,
    'react/no-danger': 0,
    camelcase: 0,
    'linebreak-style': ['off', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // 关闭不允许使用 no-tabs
    'no-tabs': 'off',
    'no-console': 0,
    'no-multiple-empty-lines': 1,
    // 设置不冲突 underscore 库
    'no-underscore-dangle': 0,
    // 箭头函数直接返回的时候不需要 大括号 {}
    'arrow-body-style': [2, 'as-needed'],
    'no-alert': 'error',
    // 设置是否可以重新改变参数的值
    'no-param-reassign': 0,
    // 允许使用 for in
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    // 不需要每次都有返回
    'consistent-return': 0,
    // 允许使用 arguments
    'prefer-rest-params': 0,
    // 允许返回 await
    'no-return-await': 0,
    // 不必在使用前定义 函数
    'no-use-before-define': 0,
    // 有一些 event 的时候，不需要 role 属性，不需要其他解释
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    // 类成员之间空行问题
    'lines-between-class-members': 0,
    // 不区分是否在 despendencies
    'import/no-extraneous-dependencies': 0,
    // 引用时候根据根目录基础
    'import/no-unresolved': 0,
    // 关闭解构赋值报错
    'react/destructuring-assignment': 0,
    // 不区分是否是 无状态组件
    'react/prefer-stateless-function': 0,
    // prop-types忽略children属性
    'react/prop-types': [
      1,
      {
        ignore: ['children'],
      },
    ],
    // 关闭禁止prop-types类型
    'react/forbid-prop-types': 0,
    // 关闭default-props检查
    'react/require-default-props': 0,
    // Prevent missing React
    'react/react-in-jsx-scope': 0,
    // Restrict file extensions
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'global-require': 0,
    'no-debugger': 1,
    'max-len': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-plusplus': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-unused-expressions': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // eslint（https://eslint.bootcss.com/docs/rules/）
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-useless-escape': 'off', // 禁止不必要的转义字符
    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/semi': 'off',
  },
};
