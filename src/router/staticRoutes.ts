/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-27 13:45:43
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-02-27 15:39:41
 * @FilePath: \admin-demo\src\router\staticRoutes.ts
 * @Description: 基础路由
 */
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/system/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
]

export default routes
