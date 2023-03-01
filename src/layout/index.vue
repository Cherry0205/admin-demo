<!--
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-03-01 10:04:11
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-03-01 18:21:43
 * @FilePath: \admin-demo\src\layout\index.vue
 * @Description: 页面布局
-->
<template>
  <a-layout class="layout-container">
    <com-sider />
    <a-layout>
      <com-header />
      <a-layout-content class="content-style">
        <com-content />
      </a-layout-content>
      <a-layout-footer class="footer-style"> Admin Demo Created by Cherry </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
  import Sider from './components/Sider.vue'
  import Header from './components/Header.vue'
  import Content from './components/Content.vue'

  const ComSider = Sider
  const ComHeader = Header
  const ComContent = Content
</script>

<style lang="less" scoped>
  .layout-container {
    height: 100vh;
  }

  .content-style {
    margin: 24px 16px 0;
    padding: 24px;
    background: #fff;
    min-height: 280px;
  }

  .footer-style {
    text-align: center;
  }
</style>
