/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-03-01 09:39:43
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-03-01 11:21:56
 * @FilePath: \admin-demo\src\router\constants.ts
 * @Description: router常量
 */
// 页面布局
export const LAYOUT = () => import('@/layout/index.vue')

// 空布局
export const EMPTY_LAYOUT = () => import('@/layout/empty.vue')

// 错误页
export const ERROR_PAGE = () => import('@/views/system/error/index.vue')
