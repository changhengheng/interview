# 路由模式：history 和 hash 的区别

VueRouter 中有两种路由模式：hash 和 history

hash 模式:
- 路径中带 #，用来分割后台路由和前台路由：# 前的路径会当做后台路由解析，# 后的路径会当做前台路由解析
- 前台路由不会被提交到服务端，发请求时一般总是请求根路径，响应得到的总是 index.html 页面
- 前台路由可以改变，路由改变时显示对应的路由组件，不会刷新页面

原理
- hash 通过 window.location.hash 的方式，实现路由跳转的功能。
- hash 通过 window.onhashchange 的方式，来监听 hash 的改变，借此实现无刷新跳转的功能。

history 模式:
- 路径中不带 #，比较美观
- 可能会出现 404 问题：
    - history 会把整个路由当做后台路由去对待，请求时全都发到服务器
    - 对当前的页面进行刷新时，此时浏览器会重新发起请求，请求当前 url 对应的资源，但是单页面只打包出一个 index.html 资源，找不到当前 url 对应的资源就会返回 404。（根目录刷新不会 404，因为请求的就是 index.html 对应的就是根目录；其他页面刷新会 404）

- 希望: 如果没有对应的资源, 返回 index 页面, path 部分 (/home/news) 被解析为前台路由路径，还和 hash 模式 http://localhost:8080/#/home/news 效果一樣

- 解决: 添加配置
    -  devServer 添加: historyApiFallback: true, // 任意的 404 响应都被替代为 index.html
    - output 添加: publicPath: '/', // 引入打包的文件时路径以 / 开头

    1. 开发解决方案：
    - 基于 webpack 脚手架解决方案：`devServer: {historyApiFallback: true}` 原理就是服务器如果找不到 url 对应的请求资源，就返回 index.html。通常来说项目脚手架都已经配置过了，不需要额外配置。

    2. 线上解决方案：
    - 基于 nginx 解决方案：`try_files $uri $uri/ /index.html;`

原理
- history 通过 window.history.pushState / replaceState 等方式，实现路由跳转的功能。
- history 通过 window.onpopstate 的方式，来监听 url 的改变，借此实现无刷新跳转的功能。