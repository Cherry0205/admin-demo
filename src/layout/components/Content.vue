<!--
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-03-01 10:04:11
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-03-01 18:08:45
 * @FilePath: \admin-demo\src\layout\components\Content.vue
 * @Description: 页面内容
-->
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
</template>
