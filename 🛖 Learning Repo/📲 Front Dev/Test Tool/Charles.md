# Charles

>Charles is an HTTP proxy / HTTP monitor / Reverse Proxy that enables a developer to view all of the HTTP and SSL / HTTPS traffic between their machine and the Internet. This includes requests, responses and the HTTP headers (which contain the cookies and caching information).

## 主要功能

- 截取http和https网络封包
- 支持重发网络请求，便于后端进行调试
- 支持修改网络请求参数
-  支持网络请求截获并动态修改
- 支持模拟慢速网络

## 视图

Charles 提供两种查看抓包的视图，分别名为 `Structure` 和 `Sequence`。
- `Structure/结构视图`，将网络请求按访问的域名分类，比如某个域名下有n个资源请求，那么所有此域名下的请求都会在这里做一个详细的分类；
-   `Sequence/序列视图`，将网络请求按访问的时间排序，按照你的电脑的发送请求顺序进行。
![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201141056192.png)
     mm    nn                               