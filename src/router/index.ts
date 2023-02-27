/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-24 10:20:12
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-02-27 14:19:02
 * @FilePath: \admin-demo\src\router\index.ts
 * @Description: 路由ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import staticRoutes from './staticRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes,
  scrollBehavior: () => ({ top: 0 })
})

export default router
