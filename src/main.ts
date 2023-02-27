/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-20 16:59:08
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-02-27 18:16:34
 * @FilePath: \admin-demo\src\main.ts
 * @Description: 入口ts
 */
import { createApp } from 'vue'
import './common.less'
import App from './App.vue'
import 'ant-design-vue/es/message/style/css'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
