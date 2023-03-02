/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-27 13:45:43
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-03-02 17:02:01
 * @FilePath: \admin-demo\src\router\staticRoutes.ts
 * @Description: 基础路由
 */
import { RouteRecordRaw } from 'vue-router'
import { PageEnum } from './enums'
import { LAYOUT, EMPTY_LAYOUT, ERROR_PAGE } from './constants'

/* 
 meta属性
 {Boolean}hideMenu：在菜单中隐藏
 {Boolean}hideBreadcrumb：在面包屑中隐藏
*/
const basicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: PageEnum.HOME_URL
  },
  {
    path: PageEnum.LOGIN_URL,
    name: 'Login',
    component: () => import('@/views/system/login/index.vue'),
    meta: {
      title: '登录',
      hideMenu: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: LAYOUT,
    meta: {
      title: 'Dashboard',
      hideBreadcrumb: true
    },
    children: [
      {
        path: '',
        name: 'DashboardIndex',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'Dashboard'
        }
      }
    ]
  }
]

const errorRoutes: RouteRecordRaw[] = [
  {
    path: '/error',
    name: 'Error',
    component: EMPTY_LAYOUT,
    meta: {
      title: '错误页',
      hideMenu: true
    },
    children: [
      {
        path: '403',
        name: '403',
        component: ERROR_PAGE,
        meta: {
          title: '403'
        }
      },
      {
        path: '404',
        name: '404',
        component: ERROR_PAGE,
        meta: {
          title: '404'
        }
      },
      {
        path: '500',
        name: '500',
        component: ERROR_PAGE,
        meta: {
          title: '500'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/error/404'
  }
]

const staticRoutes: RouteRecordRaw[] = [...basicRoutes, ...errorRoutes]

export default staticRoutes
