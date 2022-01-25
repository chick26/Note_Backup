![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201241624104.svg)

>**超文本传输协议**（英语：**H**yper**T**ext **T**ransfer **P**rotocol，缩写：**HTTP**）是一种用于分布式、协作式和超媒体信息系统的应用层协议, [[HTTP]]是 [[WWW|万维网]] 的数据通信的基础。设计 [[HTTP]] 最初的目的是为了提供一种发布和接收 [[HTTP]] 页面的方法。通过 [[HTTP]] 或者 [[HTTP|HTTPS协议]] 请求的资源由 [[URL|统一资源标识符]] 来标识。

 #Internet/Http 

# 协议概述

HTTP是一个客户端（用户）和服务端（网站）之间请求和应答的标准，通常使用 [[TCP|TCP协议]]。通过使用网页浏览器、网络爬虫或者其它的工具，客户端发起一个HTTP请求到服务器上指定端口（默认端口为80）。我们称这个客户端为用户代理程序（user agent）。应答的服务器上存储着一些资源，比如 [[HTML]] 文件和图像。我们称这个应答服务器为源服务器（origin server）。

尽管 TCP/IP 协议是互联网上最流行的应用，但是在 HTTP 协议中并没有规定它必须使用或它支持的层。事实上 HTTP 可以在任何互联网协议或其他网络上实现。HTTP 假定其下层协议提供可靠的传输。因此，任何能够提供这种保证的协议都可以被其使用，所以其在 TCP/IP 协议族使用 [[TCP]] 作为其传输层。

# 状态码

## 状态码分类

- 1xx 服务器收到请求
- 2xx 请求成功，如 200
- 3xx 重定向，如 302
- 4xx 客户端错误，如 404
- 5xx 服务端错误，如 500

## 常见状态码

- 200 成功
- 301 永久重定向（配合 location，浏览器自动处理）8888
- 302 临时重定向（配合 location，浏览器自动处理）
- 304 资源未被修改
- 404 资源未找到
- 403 没有权限
- 500 服务器错误
- 504 网关超时

# http method

## 传统 methods

-   get 获取服务器数据
-   post 向服务器提交数据

## 现在 methods

-   get 获取数据
-   post 新建数据
-   patch/put 更新数据
-   delete 删除数据

## Restful API

>新的 API 设计方法，传统是把每个 url 当作一个功能，这个把每个 url 当作一个唯一的资源

- 不使用 url 参数
	- 传统 [function + 参数] `/api/list?pageIndex=2`
	- Restful API [资源标识] `/api/list/2`
- 用 method 标识操作类型
	- 传统
		- post `/api/create-blog`
		- patch`/api/update-blog?id=100`
		- get `/api/get-blog?id`
	- Restful API
		- post `/api/blog`
		- patch`/api/blog/100`
		- get `/api/blog/100`

# http headers

## Request Headers

-   Accept 浏览器可接收的数据格式
-   Accept-Encoding 浏览器可接收的压缩算法，如 gzip
-   Accept-Languange 浏览器可接收的语言，如 zh-CN
-   Connection: keep-alive 一次 TCP 连接重复使用
-   cookie: 同域请求浏览器自带
-   host: 请求域名
-   User-Agent: 浏览器信息
-   Content-type: 发送数据的格式，如 application/json

## Response Headers

-   Content-type: 返回数据的格式，如 application/json
-   Content-length: 返回数据的大小，多少字节
-   Content-Encoding: 返回数据的压缩算法，如 gzip
-   Set-Cookie: 服务端修改 cookie

## 缓存相关的 headers

-   Cache-Control Expires
-   Last-Modified If-Modified-Since
-   Etag If-None-Match

# http 缓存

## 关于缓存

### 什么是缓存

没有必要再重新获取的资源

### 为什么需要缓存

网络请求的加载相对于页面渲染，页面加载速度很慢；通过缓存减少网络请求的体积和速度

### 什么资源可以被缓存

静态资源 ( js css img )

## http 缓存策略

### 强制缓存

- 初次请求，服务端返回资源，有 Cache-Control 的返回头则需要缓存
- 再次请求（同一份资源，hash），缓存未过期直接从缓存获取
- Cache-Control
- max-age: 缓存到期时长/s
- no-cache：无强制缓存
- no-store：无强制缓存且服务端不设置缓存
- private：只允许用户设备缓存
- public：可以被代理服务器识别
- Expires ( 控制缓存过期，被 Cache-Control 代替 )
![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201241838122.png)
### 协商缓存（对比缓存）

- 服务端缓存策略
- 服务端判断客户端资源，是否和服务端资源一样
- 一致则返回 304，否则 200 和 最新资源
- 资源标识 ( Response Headers )
- Last-Modified 资源的最后修改时间
- Etag 资源的唯一标识（指纹，字符串）
- 共存优先使用 Etag（因为修改时间只能秒级）
![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201241840453.png)

## 刷新操作方式，对缓存的影响

- 常操作：地址栏输入 url， 跳转链接，前进后退
- 强制缓存有效，协商缓存有效
- 手动刷新：F5，点击刷新按钮，点击菜单刷新
- 强制缓存失效，协商缓存有效
- 强制刷新：ctrl + F5
- 强制缓存失效，协商缓存失效

# 相关面试题

- http 常见的状态码有哪些
- http 常见的 header 有哪些
- 什么是 Restful API
- **描述一下 http 的缓存机制**

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201241838122.png)
