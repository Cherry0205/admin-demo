import { defineStore } from 'pinia'
import { UserState, UserInfo, RoleType } from './interfaces'

export const userStore = defineStore('User', {
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
