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
┃ ┃ ┣ 📜PropsType.tsx
┃ ┃ ┣ 📜index.md
┃ ┃ ┣ 📜index.test.tsx
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
- 
## 参考文章

* [leonwgc/react-uni-comps: 桌面和移动端react组件库, desktop & mobile react components](https://github.com/leonwgc/react-uni-comps)
* [教你使用Dumi和father-build快速搭建React组件库 - 掘金](https://juejin.cn/post/6904795653243994125)
* [使用dumi生成react组件库文档并发布到github pages - 记忆的森林 - 博客园](https://www.cnblogs.com/leonwang/p/15646295.html)
* 