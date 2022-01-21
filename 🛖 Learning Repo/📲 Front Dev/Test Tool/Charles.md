# Charles

>Charles is an HTTP proxy / HTTP monitor / Reverse Proxy that enables a developer to view all of the HTTP and SSL / HTTPS traffic between their machine and the Internet. This includes requests, responses and the HTTP headers (which contain the cookies and caching information).

## 主要功能

- 截取http和https网络封包
- 支持重发网络请求，便于后端进行调试
- 支持修改网络请求参数
-  支持网络请求截获并动态修改
- 支持模拟慢速网络

## 视图选项

>Charles 提供两种查看抓包的视图，分别名为 `Structure` 和 `Sequence`。

### 方法一 封包过滤

* `Structure/结构视图`，将网络请求按访问的域名分类，比如某个域名下有n个资源请求，那么所有此域名下的请求都会在这里做一个详细的分类；
![Structure](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201141056192.png)
* `Sequence/序列视图`，将网络请求按访问的时间排序，按照你的电脑的发送请求顺序进行。
![Sequence](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201141124191.png)

### 方法二 域名抓包

除此上面的方法之外，也可以修改Include的域名和端口。  在 Charles 的菜单栏选择 `Proxy -> Recording Settings`，然后选择 `Include` 栏，选择添加一个项目，然后填入需要监控的协议，主机地址，端口号。这样就可以只截取目标网站的封包了
![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201170828680.png)

### 方法三 过滤焦点域名

在目标的网络请求上右键，选中`focus`（此时，该域名已经被设置为一个焦点标记了），然后点击 `fillter` 后面的 `focused` 来筛选你的做的 `focus` 标记文件。
![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201170951306.png)

这种方法是抓取特定的网络请求，设置的焦点域名在 `focused Hosts` 里面可以查看和管理。
![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201170954660.webp)

这种模式下的展现更加人性化，当你设置某个域名为焦点域名的时候，会把当前域名单独显示在上面，而其它的非焦点域名，都会在`other Hosts`里显示。

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201171711236.webp)


## 界面说明

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201171711365.webp)

`Contents`是最常用的一个标签，其中上半部分是请求，下半部分是响应：请求部分中，会根据请求的内容，而分为很多项，比如如果是表单提交，还会有form的选项供你查看提交的内容（表格图形化的方式），最后一项”Raw”是未经处理的请求信息，可以理解为，raw左侧的所有项目都是对raw信息的拆分和美化，以便直观查看。

### Content 乱码问题
- `Help` -> `SSL Proxying` -> `Install Charles Root Certificate`
- MacOS 信任证书
- 配置监听端口
 ![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201191702464.png)

### Proxy

#### 常用功能开关

- stop/start recording                开始/暂停记录

>是常用的功能，这里需要注意后面的session1代表当前你将要操作的会话窗口，就是切换是否进行捕获记录。


- stop/start throttling                 开始/暂停节流
- enable/disable breakpoints     启用/禁用断点

#### 常用功能设置
- recording settings            记录设置
- throttle settings                节流设置
- breakpoint settings           断点设置

#### 反向代理和端口转发
- reverse proxies            反向代理
- port forwarding            端口转发

#### 代理身份配置
- macOS Proxy               开启整个系统通过charles作为代理

#### 高级设置
- proxy setting                     代理设置
- ssl proxy setting                ssl代理设置
- access control setting      访问控制设置
- extornal proxy setting       外部代理设置
- web interface setting        Web界面设置