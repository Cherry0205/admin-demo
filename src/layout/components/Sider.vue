<!--
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-03-01 10:04:11
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-03-02 16:51:52
 * @FilePath: \admin-demo\src\layout\components\Sider.vue
 * @Description: 侧边栏
-->
<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <router-link :to="homeLink">
      <div :class="{ logo: true, 'collapsed-center': collapsed }">
        <smile-outlined />
        <span v-if="!collapsed" class="title">HELLO</span>
      </div>
    </router-link>
    <a-menu v-model:selectedKeys="selectedKeys" class="menu-style" theme="dark" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-sub-menu key="2">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Three</template>
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
        <a-sub-menu key="sub1-2" title="Submenu">
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useAppStore } from '@/store/app'

  const appStore = useAppStore()
  const collapsed = computed(() => !appStore.siderbar.opened)

  const selectedKeys = ref<string[]>(['1'])
  const homeLink = ref<string>('/')
</script>

<style lang="less" scoped>
  .logo {
    line-height: 32px;
    margin: 16px;
    font-size: 28px;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.2s ease-in;

    &.collapsed-center {
      margin-left: 26px;
    }

    .title {
      padding-left: 10px;
      transition: all 0.2s ease-in;
    }
  }

  .menu-style {
    height: calc(100% - 64px);
    overflow-y: auto;
  }
</style>
