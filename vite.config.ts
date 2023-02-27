/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-20 16:59:08
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-02-27 16:07:48
 * @FilePath: \demo\vite.config.ts
 * @Description: 项目配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: `${path.resolve(process.cwd(), 'src')}/`
      }
    ]
  }
})
