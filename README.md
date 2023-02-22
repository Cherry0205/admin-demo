<!--
 * @Author: Cherry 2858937488@qq.com
 * @Date: 2023-02-20 16:59:08
 * @LastEditors: Cherry 2858937488@qq.com
 * @LastEditTime: 2023-02-21 15:21:26
 * @FilePath: \demo\README.md
 * @Description: 项目说明
-->

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

# 本项目用到的技术栈

vue 3.2 + vite4 + typescript4 +

# 代码风格检查与格式化

1. eslint + prettier
2. 使用阿里规范 eslint-config-ali
3. 如果多人开发代码风格不一，在确认 node 环境、依赖有差异的情况下，可以在配置文件里设置默认规则

## 准备

## 安装使用

- 获取项目代码

```bash
git clone
```

- 安装依赖

```bash
cd admin

pnpm install

```

- 运行

```bash
pnpm serve
```

- 打包

```bash
pnpm build
```
