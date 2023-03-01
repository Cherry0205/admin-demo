/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-20 16:59:08
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-03-01 15:29:23
 * @FilePath: \demo\vite.config.ts
 * @Description: 项目配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true
        })
      ]
    })
  ],

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
