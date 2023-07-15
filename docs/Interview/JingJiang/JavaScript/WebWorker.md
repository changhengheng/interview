# WebWorker

是什么
- Web Worker 是 HTML5 新特性，可以用于创建分线程，并在分线程中运行一段 js 代码，它可以让开发者对 js 实现多线程操作。

为什么
- 主线程同步代码耗时严重（比如函数递归调用：通常都是CPU密集型操作）（递归（直接递归、间接递归））可以使用web worker创建分线程去执行，防止主线程代码被阻塞

怎么做
1. 创建worker：
- 通过new实例化调用Worker构造函数创建一个worker对象
- 构造函数接收两个参数：
    - 参数一 URL ，是将在 worker 线程中运行的代码的脚本文件。
    - 参数二是一个配置对象，type:module 用来开启ES6模块化
2. 主线程通知分线程
- worker.postMessage给worker线程发送数据
3. 分线程接收主线程通知
- worker 分线程在另一个独立的全局上下文中运行，主线程方法在webWorker实例对象上，分线程在self对象上（self是可以访问worker分线程全局作用域的关键字）
- self.onmessage 事件的event.data可以拿到主线程传输的数据
4. 分线程通知主线程
- self.postMessage给主线程发送数据
5. 主线程接收分线程结果
-  worker.onmessage事件的event.data可以拿到分线程传输的数据
        
可以引入模块
- importScripts()（相当于合并了两个js文件）
    - 比如说你在另一个单独脚本中编写了一些想在 worker.js 中使用的功能，则可以使用importScripts('jsurl1','jsurl2')导入它
    - 配置并使用ES6模块化（new Worker时传第二个参数）
	
场景：断点续传时根据文件内容生成hash时，需要使用webworker以避免阻塞主线程
