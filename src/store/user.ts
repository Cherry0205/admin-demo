/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-24 14:50:50
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-02-27 13:56:33
 * @FilePath: \admin-demo\src\store\user.ts
 * @Description: user状态管理
 */
import { defineStore } from 'pinia'
import { UserState, UserInfo, RoleType } from './interfaces'

export const useUserStore = defineStore('User', {
  state: (): UserState => ({
    token: '', // 登录token
    userId: '', // 用户id
    userName: '', // 用户姓名
    avatar: '', // 用户头像
    roles: [] // 角色权限
  }),

  getters: {},

  actions: {
    // 设置用户信息
    setUserInfo(info: UserInfo) {
      const { token, userId, userName, avatar } = info
      this.token = token
      this.userId = userId
      this.userName = userName
      this.avatar = avatar
    },

    // 设置角色权限
    setRole(roleList: RoleType) {
      this.roles = roleList
    }
  }
})
