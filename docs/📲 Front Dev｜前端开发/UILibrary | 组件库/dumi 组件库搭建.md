---
title: dumi 组件库搭建
creation date: 2022-02-28 19:05 
status: doing
tags:
- UILibrary
- dumi
---
## 问题记录

###  1.引用自身组件报错
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

### 2.组件发布私有库

^2c1320

#### 登录私有库
```shell
#未注册且私服允许注册的
npm adduser --registry=http://xxx.xxx.x.xx:4873

#输入npm账号用户名、密码和邮箱，如下：
Username: better1025
Password: 
Email: (this IS public) xxx@xx.com
Logged in as better1025 on http://xxx.xxx.x.xx:4873/.

#之前已经注册过了，就使用下面的登录命令
npm login --registry=http://xxx.xxx.x.xx:4873
```

#### 发布npm包到私有仓库
```shell
#cd 项目目录
npm publish --registry=http://xxx.xxx.x.xx:4873
```

### 3.解决使用私有库配置

- .npmrc
```
registry=https://nexus.dev/repository/npm-proxy/  
@mycompany:registry=https://myserver.dev/repository/npm-releases/
```

- .yarnrc
```
registry "https://nexus.dev/repository/npm-proxy/"  
"@mycompany:registry" "https://myserver.dev/repository/npm-releases/"
```

### 4.解决 father rollup 模式对 cjs 引用问题

#### 问题描述
项目依赖 `classnames`，希望把这个三方包打到产物中，是这样配置的
```ts
// .fatherrc.ts
export default {
  cjs: 'rollup',
  externalsExclude: ['classnames'],
};

```

打包时出现错误提示
```shell
✖  error     Error: 'default' is not exported by node_modules/classnames/index.js, imported by src/index.js
```

#### 解决方案
```ts
// .fatherc.ts
// father 锁定了 rollup 版本，需要根据对应版本选择适合的 commonjs 插件 15.1.0
import commonjs from '@rollup/plugin-commonjs';
export default {
	esm: 'rollup',
	entry: 'src/index',
	lessInRollupMode: {
		javascriptEnabled: true,
	},
	autoprefixer: {
		overrideBrowserslist: ['ie>9', 'Safari >= 6'],
	},
	externalsExclude: ['classnames'],
	extraRollupPlugins: [commonjs()],
};
```

### 5. 解决组件库二次封装

^a7bc3d



## 参考文章

* [leonwgc/react-uni-comps: 桌面和移动端react组件库, desktop & mobile react components](https://github.com/leonwgc/react-uni-comps)
* [教你使用Dumi和father-build快速搭建React组件库 - 掘金](https://juejin.cn/post/6904795653243994125)
* [使用dumi生成react组件库文档并发布到github pages - 记忆的森林 - 博客园](https://www.cnblogs.com/leonwang/p/15646295.html)
* 