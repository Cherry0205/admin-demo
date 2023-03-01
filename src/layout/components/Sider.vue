<!--
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-03-01 10:04:11
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-03-01 18:24:10
 * @FilePath: \admin-demo\src\layout\components\Sider.vue
 * @Description: 侧边栏
-->
<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const selectedKeys = ref<string[]>(['1'])
  const collapsed = ref<boolean>(false)
</script>

<style lang="less" scoped>
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
</style>
