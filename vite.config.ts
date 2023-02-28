/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-20 16:59:08
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-02-28 10:55:55
 * @FilePath: \demo\vite.config.ts
 * @Description: 项目配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: `${resolve(process.cwd(), 'src')}/`
      }
    ]
  },

  server: {
    host: true,
    port: 8008,
    origin: 'http://localhost:8008',
    open: './index.html'
  },

  esbuild: {
    pure: process.env.NODE_ENV === 'production' ? ['console.log', 'debugger'] : []
  }
})
