配置自动打开：
vite.config.js
server:{
    port:
    open:true
}


重点：
    树状列表懒加载、虚拟滚动列表、富文本编辑器、

resfulAPI 一个接口完成增删改查的操作，只改变请求方式
以资源为单位，一个资源对应一个接口，对应四种增删改查四种操作
非restfulAPI 一个接口只完成一个操作，改变地址和请求方式


虚拟滚动列表：只渲染可见区域的数据（）

2023-7-11 14:29:17

虚拟滚动列表和分页（可以前台分页，也可以后台分页）的作用都是拿一部分数据进行展示