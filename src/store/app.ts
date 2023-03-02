/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-24 14:50:50
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-03-02 16:53:53
 * @FilePath: \admin-demo\src\store\app.ts
 * @Description: app状态管理
 */
import { defineStore } from 'pinia'
import { AppState, DeviceType } from './interfaces'

export const useAppStore = defineStore('App', {
  state: (): AppState => ({
    device: 'desktop', // 设备类型
    siderbar: {
      opened: true, // 是否打开左菜单
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
    toggleSiderBar() {
      this.siderbar.opened = !this.siderbar.opened
    },

    // 切换页面全屏
    toggleMaximize() {
      this.systemConfig.maximize = !this.systemConfig.maximize
    }
  }
})
