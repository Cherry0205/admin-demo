<!--
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-03-01 10:04:11
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-03-02 16:17:23
 * @FilePath: \admin-demo\src\layout\components\Header.vue
 * @Description: 页面头部
-->
<template>
  <a-layout-header class="header-style">
    <menu-unfold-outlined v-if="collapsed" class="menu-fold-trigger" @click="toggleFoldMenu" />
    <menu-fold-outlined v-else class="menu-fold-trigger" @click="toggleFoldMenu" />

    <a-dropdown :trigger="['click', 'hover']">
      <div class="user-info-card">
        <a-avatar :size="40">
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <div class="name">用户</div>
        <DownOutlined />
      </div>
      <template #overlay>
        <a-menu>
          <a-menu-item key="1">退出登录</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useAppStore } from '@/store/app'

  const appStore = useAppStore()
  const collapsed = computed(() => !appStore.siderbar.opened)

  const toggleFoldMenu = appStore.toggleSiderBar
</script>

<style lang="less" scoped>
  .header-style {
    background: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
  }

  .menu-fold-trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  .user-info-card {
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover,
    &:active {
      color: #1890ff;
    }

    .name {
      padding: 0 15px;
      max-width: 120px;
      overflow: hidden;
      white-space: nowrap;
      word-break: break-all;
      text-overflow: ellipsis;
    }
  }
</style>
