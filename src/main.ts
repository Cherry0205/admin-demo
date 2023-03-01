/*
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-20 16:59:08
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-03-01 17:09:17
 * @FilePath: \admin-demo\src\main.ts
 * @Description: 入口ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import '@/style/common.less'

const app = createApp(App)
const store = createPinia()

app.use(router)
app.use(store)

app.mount('#app')
