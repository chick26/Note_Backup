---
title: dumi 组件库搭建
creation date: 2022-02-28 19:05 
status: doing
tags:
- UILibrary
- dumi
---
## 问题记录

###  引用自身组件报错
#### 问题描述
- 文件目录结构
```md
📦src
┣ 📂components
┃ ┣ 📂Foo
┃ ┗ 📂UniButton
┃ ┃ ┣ 📜index.md
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┣ 📜uniButton.less
┃ ┃ ┗ 📜uniButton.tsx
┣ 📂demos
┃ ┣ 📂demo-block
┃ ┃ ┣ 📜index.less
┃ ┃ ┗ 📜index.tsx
┃ ┣ 📂demo-description
┃ ┗ 📜index.ts
┣ 📂global
┃ ┣ 📜global.less
┃ ┣ 📜index.ts
┃ ┗ 📜theme.less
┣ 📂utils
┗ 📜index.ts
```
- 引用组件库组件作为 DEMO 展示时, dumi 自动识别当前组件文件目录 `src/index.ts`, 而内部组件(不作为输出组件声明部分, `src/demos/index.ts`) 需要添加别名

#### 解决方案 
`.umirc.ts` 添加别名配置
```ts
import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
	alias: {
		demos: path.join(__dirname, 'src/demos/index.ts'),
	},
});
```

## 参考文章

* [leonwgc/react-uni-comps: 桌面和移动端react组件库, desktop & mobile react components](https://github.com/leonwgc/react-uni-comps)
* [教你使用Dumi和father-build快速搭建React组件库 - 掘金](https://juejin.cn/post/6904795653243994125)
* [使用dumi生成react组件库文档并发布到github pages - 记忆的森林 - 博客园](https://www.cnblogs.com/leonwang/p/15646295.html)
* 