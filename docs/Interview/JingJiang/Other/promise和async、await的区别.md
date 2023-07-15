# promise 和 async、await 的区别

* Promise 是异步编程的一个解决方案；async 是 generator 的语法糖，一般搭配 await 使用，其中，async 用于声明一个函数是异步的，await 用于等待一个异步函数执行完成；async/await 是异步编程的终极解决方案；
* 写法：
    链式调用：Promise 支持链式调用，async 函数、.then、.catch、.finally、Promise.all、Promise.allSettled、Promise.race、Promise.resolve、Promise.reject
    异步代码同步化：async/await 实现了异步代码同步化（同步写法），彻底解决了回调形式的异步写法，代码可读性更强
* 错误捕获：Promise 使用 .then 的第二个回调，或者 .catch、.finally 处理错误；async 使用 try……catch…… 捕获错误（当然也可以使用 .then）
