/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-24 14:50:50
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-02-27 10:53:12
 * @FilePath: \admin-demo\src\store\app.ts
 * @Description: 状态管理
 */
import { defineStore } from 'pinia'
import { AppState, DeviceType } from './interfaces'

export const appStore = defineStore('App', {
  state: (): AppState => ({
    device: 'desktop', // 设备类型
    sidebar: {
      opened: true,
      withoutAnimation: false // 是否移除动画
    }, // 左侧菜单栏
    systemConfig: {
      maximize: false // 当前页面是否全屏
    }
  }),

  getters: {},

  actions: {
    // 切换设备类型
    toggleDevice(device: DeviceType) {
      this.device = device
    },

    // 切换左菜单显示
    toggleSideBar() {
      this.sidebar.opened = !this.sidebar.opened
    },

    // 切换页面全屏
    toggleMaximize() {
      this.systemConfig.maximize = !this.systemConfig.maximize
    }
  }
})
