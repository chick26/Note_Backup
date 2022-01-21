![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201211808675.png)

>Charles is an HTTP proxy / HTTP monitor / Reverse Proxy that enables a developer to view all of the HTTP and SSL / HTTPS traffic between their machine and the Internet. This includes requests, responses and the HTTP headers (which contain the cookies and caching information).

# 主要功能

- 截取http和https网络封包
- 支持重发网络请求，便于后端进行调试
- 支持修改网络请求参数
- 支持网络请求截获并动态修改
- 支持模拟慢速网络

# 视图选项

>Charles 提供两种查看抓包的视图，分别名为 `Structure` 和 `Sequence`。

## 方法一 封包过滤

* `Structure/结构视图`，将网络请求按访问的域名分类，比如某个域名下有n个资源请求，那么所有此域名下的请求都会在这里做一个详细的分类；
![Structure](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201141056192.png)
* `Sequence/序列视图`，将网络请求按访问的时间排序，按照你的电脑的发送请求顺序进行。
![Sequence](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201141124191.png)

## 方法二 域名抓包

除此上面的方法之外，也可以修改Include的域名和端口。  在 Charles 的菜单栏选择 `Proxy -> Recording Settings`，然后选择 `Include` 栏，选择添加一个项目，然后填入需要监控的协议，主机地址，端口号。这样就可以只截取目标网站的封包了
![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201170828680.png)

## 方法三 过滤焦点域名

在目标的网络请求上右键，选中`focus`（此时，该域名已经被设置为一个焦点标记了），然后点击 `fillter` 后面的 `focused` 来筛选你的做的 `focus` 标记文件。
![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201170951306.png)

这种方法是抓取特定的网络请求，设置的焦点域名在 `focused Hosts` 里面可以查看和管理。
![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201170954660.webp)

这种模式下的展现更加人性化，当你设置某个域名为焦点域名的时候，会把当前域名单独显示在上面，而其它的非焦点域名，都会在`other Hosts`里显示。

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201171711236.webp)


# 界面说明

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201171711365.webp)

`Contents`是最常用的一个标签，其中上半部分是请求，下半部分是响应：请求部分中，会根据请求的内容，而分为很多项，比如如果是表单提交，还会有form的选项供你查看提交的内容（表格图形化的方式），最后一项”Raw”是未经处理的请求信息，可以理解为，raw左侧的所有项目都是对raw信息的拆分和美化，以便直观查看。

## Content 乱码问题
- `Help` -> `SSL Proxying` -> `Install Charles Root Certificate`
- MacOS 信任证书
- 配置监听端口
 ![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201191702464.png)

## Proxy

### 常用功能及其设置

#### stop/start recording 开始/暂停记录

>是常用的功能，这里需要注意后面的session1代表当前你将要操作的会话窗口，就是切换是否进行捕获记录。下面的Imporet和export分别是资源的导入和导出，类似PSD文件一样，详细的储存，方便直接导入使用；但是仅仅是储存当前的设置。  `include`,`exclude` 是对特定域名进行抓包。

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201211423563.webp)

#### stop/start throttling 开始/暂停节流

>暂时开始慢网速，这个手机上2G/3G/4G的速度，这个对应工具栏的小乌龟图标。

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201211425364.webp)

#### enable/disable breakpoints 启用/禁用断点

>有时候对于一些特殊请求在发往服务器之前想要修改一些参数，或者在服务器响应完成之后修改响应信息，此时可以使用Charles的断点功能，设置断点之后，当有网络请求的时候Charles会自动跳转到断点处，此时我们就能进行相关的修改。

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201211430292.webp)
![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201211430643.webp)

#### SSL Proxying Settings

>通过SSL代理，您的浏览器或应用程序将收到由Charles签名的证书，而不是来自远程Web服务器的原始证书。这将在您的浏览器或应用程序中触发警告，某些应用程序实际上可能会拒绝该连接。

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201211555606.webp)

### 反向代理和端口转发

#### reverse proxies 反向代理

>- 正向代理：是代理客户端，为客户端收发请求，使真实客户端对服务器不可见；在客户这一端的，替客户收发请求（类似现在正常使用的charles的功能）
>- 反向代理：是代理服务器，为服务器收发请求，使真实服务器对客户端不可见；在服务器这端的，替服务器收发请求，应用场景常见是就是请求分发到多台服务器的负载均衡应用。

* 反向代理的设置  
	* __本地端口__:  本地主机上的端口创建反向代理。该字段可能会自动填充一个可用的端口。如果有另一个应用程序使用该端口，则在反向代理启动时将收到一条警告消息。例如。给定本地端口8001，将连接到 http:// localhost:8001
	* __远程主机和端口__：作为反向代理的目的地的远程主机的主机名或IP地址和端口。远程端口默认为80，这是HTTP的默认端口。  例如。输入 [百度](https://www.baidu.com) 的远程主机和80的远程端口，然后 http:// localhost:8001 将像是已连接到 [百度](https://www.baidu.com)。
	* __重写重定向__：重定向远程服务器的响应将被重写以与反向代理源地址相匹配。默认为开。  远程服务器的重定向响应是完全限定的URL，即使它们在同一网站内。如果重定向到远程服务器地址，则需要将其重写为反向代理本地地址，否则客户端将使用重定向URL到远程主机，因此不再通过反向代理连接。
	* __保留主机头__:  仅当具有特定要求时，才需要保留主机头;普通使用的时候没有必要使用的。
	* __监听特定地址__:  如果要指定本地地址以侦听反向代理，则可以启用此选项并在此处输入IP地址。如果要在同一台机器上运行多个网络服务，但在同一台机器上的不同IP地址上运行，则此功能非常有用。禁用此选项时，反向代理将绑定到所有可用的本地地址。

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201211443730.webp)

#### port forwarding 端口转发

> 端口转发（Port forwarding），有时被叫做隧道，是安全壳(SSH) 为网络安全通信使用的一种方法。端口转发是转发一个网络端口从一个网络节点到另一个网络节点的行为，其使一个外部用户从外部经过一个被激活的NAT路由器到达一个在私有内部IP地址（局域网内部）上的一个端口。  

端口转发能够将本地TCP或UDP端口透明地转发到远程主机和端口。所有在端口的请求和回复会记录在charles。端口转发流量记录在Charles中作为 `socket://host:port/URL`。 
如果有要使用Charles监控的非HTTP应用程序，则端口转发非常有用。将端口创建到原始目标服务器，然后将客户端应用程序连接到本地端口; 端口转发对客户端应用程序是透明的，并能够查看Charles先前可能无法使用的流量。
例子：可以将本地主机上的TCP端口2525转发到远程主机上的端口25，然后当连接到`localhost:2525`，Charles将透明地将流量转发到远程主机，就像直接连接一样，会看到在Charles中记录的流量为 `socket://localhost:2525/`

### 代理身份配置

#### macOS Proxy 开启整个系统通过charles作为代理

### 高级设置

#### proxy setting 代理设置

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201211551530.webp)

- **动态端口**：启用动态端口选项来监听动态端口，每次启动时会进行查询，会赋予合理的端口，这样可以避免与计算机上可能运行的其他网络服务的冲突。
- **透明代理**：透明代理使Charles能够访问不支持HTTP代理服务器的客户端，或者不知道他们正在使用HTTP代理服务器，例如 TCP/IP 连接由路由器或防火墙重定向到Charles。这里可以被手机连接。 手机连接的时候，http代理那里写选手动，并填写此时charles的本机地址和上面设置的8888端口即可。

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201211553770.webp)

#### access control setting 访问控制设置

>访问账户设置，连接到charles时的一些配置，控制确定谁可以使用charles。本机是永远都可以访问的，默认的访问控制列表如果是空的，意味着除了这台电脑以外，没有任何设备可以使用charles。如果你把下面的提示开始，未经授权的设备连接时候会提示你是否允许。

#### extornal proxy setting 外部代理设置

>外部代理设置，有时候可能需要使用网络上的代理服务器才能访问Internet，上面已经提到了，是没法连接代理服务器的同时，让charles继续抓包的，在这种情况下，需要为Charles配置外部代理。

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201211557661.webp)

#### web interface setting Web界面设置

### Tool

#### No Caching Settings [[WWW#^6f5c8c|缓存]]

>通过修改请求和响应头来防止缓存，无缓存工具阻止客户端应用程序（如Web浏览器）缓存任何资源。因此，请求总是发送到远程站点，并且始终看到最新版本。 该工具可以作用于每个请求（选中 Enable No Caching 即可），也可以仅对配置的HOST启用。当用于”only for selected locations”时，可以将no caching的效果限制在你所配置的主机上。

- 运行原理：无缓存工具通过操纵控制缓存响应的HTTP头来防止缓存。
	- 从**请求中**删除 `If-Modified-Since` 和 `If-None-Match` 头，添加 `Pragma:no-cache` 和`Cache-control:no-cache`。  
	- 从**响应中**删除 `Expires`，`Last-Modified` 和 `ETag` 标头，添加 `Expires:0` 和 `Cache-Control:no-cache`。  

#### Block Cookies Settings

>禁用Cookie工具阻止发送和接收Cookie。 它可以用来测试网站，就像您的浏览器中禁用Cookie一样。

- 适用范围：该工具可以针对每个请求启用，也可以仅对选定的位置启用。选中 enable block cookies 即可。当用于某个域名时，可以将禁用Cookies的效果限制在你所配置的主机上；同时选中 only for selected locations 即可。
- 原理：Cookie头部从请求中删除，防止将cookie值从客户端应用程序（例如Web浏览器）发送到远程服务器。Set-Cookie头将从响应中移除，从而防止客户端应用程序从远程服务器接收cookie的请求。
- 注意：很多网站的登录是通过写入Cookies然后通过读取Cookies的值来进行网站用户身份和权限管理的；如果你禁用了Cookies，这将会到导致你登录某个网站的一直停留到登录页，这是因为写入您Cookies的方法没有值导致的；表现就是你一直登录，虽然账号密码正确但一直还是停留在登录页；也就是说如果你不是特意的测试cookie禁用的情况下，没有必要使用这个工具。

#### Map Remote Settings

>远程映射工具，把你要请求的地址，映射到一个远程地址

* 将目录映射到目录，如 `baidu.com/charles/` 映射到 `localhost/charlesdev/` 
* 将文件映射到文件，如 `baidu.com/charles/download.php` 映射到 abc.com/testing/test.html`
* 将目录与文件模式映射到目录，如 `baidu.com/charles/*.php` 到`localhost/charlesdev/`
* 如果在目标映射中未指定路径，则URL的路径部分将不会更改。如果要映射到根目录，请在目标路径字段中以 `/` 结尾。

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201211627071.png)

#### Map Local Settings

>本地映射工具能够使用本地文件，就好比它是你访问目标网站的一部分一样。客户端获取资源文件的时候，可以向服务器正常发起资源请求，但在charles就已经被截断了，并且把当前的资源请求指向设置的本地文件。 本地映射可以大大加快开发和测试的效率，否则将不得不将文件上传到网站来测试结果。使用Map Local，您可以在开发环境中安全地测试。

原理：当请求与Map Local映射匹配时，它会检查与该路径匹配的本地文件。它不包括查询字符串，如果有一个。如果所请求的文件在本地找到，则作为响应返回，就像从远程站点加载一样，因此对客户端是有欺骗性的。如果请求的文件在本地找不到，你也不用担心，请求会像平常一样由网站提供,返回给你真正的服务器数据。

#### Rewrite

>在通过charles时修改请求和响应 rewrite 功能重写对应的内容，主要可以对某些匹配请求的header、host、url、path、query param、response status、body进行rewrite。

![](https://gitee.com/chick-lee/typroa_-image_-repo/raw/master/image/202201211631168.webp)

#### repeat

>Charles将请求重新发送到服务器，并将响应显示为新请求，在测试后端接口的时候非常有用。 重复的请求在Charles内部完成，因此无法在浏览器或其他客户端中查看响应，响应只有在Charles才能看到。可以用Advanced Repeat测试并发性。