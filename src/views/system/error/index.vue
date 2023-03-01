<!--
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-28 11:21:31
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-03-01 14:03:01
 * @FilePath: \admin-demo\src\views\system\error\index.vue
 * @Description: 不同状态错误页
-->
<template>
  <div class="error-container">{{ errorCode }}错误</div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const codeArr: string[] = route.path.split('/')
  const errorCode: string = codeArr[2]
</script>

<style lang="less" scoped>
  .error-container {
    height: 100%;
  }
</style>
