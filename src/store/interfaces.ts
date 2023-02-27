/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-24 17:06:46
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-02-27 11:20:17
 * @FilePath: \admin-demo\src\store\interfaces.ts
 * @Description: store相关interface、type定义
 */
/* app */
export type DeviceType = 'desktop' | 'mobile' // 设备类型：desktop 浏览器，mobile 移动端

export interface SidebarProps {
  opened: boolean
  withoutAnimation: boolean
}

export interface SystemConfigProps {
  maximize: boolean
}

export interface AppState {
  device: DeviceType
  sidebar: SidebarProps
  systemConfig: SystemConfigProps
}

/* user */
export type RoleType = string[]

export interface UserInfo {
  token: string
  userId: string
  userName: string
  avatar?: string
}

export interface UserState extends UserInfo {
  roles: RoleType
}
