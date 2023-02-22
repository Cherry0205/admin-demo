/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-21 16:08:34
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-02-22 12:12:53
 * @FilePath: \admin-demo\.eslintrc.cjs
 * @Description: 代码校验
 */
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/eslint-recommended',
    'eslint-config-ali/typescript/vue',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint']
}
