# axios 取消请求

[参考](https://juejin.cn/post/7044532592640524324)
[参考官网](https://www.npmjs.com/package/axios#cancellation)

## CancelToken 构造函数取消请求

分两步：

1. 给 CancelToken 构造函数传递一个执行器函数，执行器函数将接受一个 cancle 函数作为默认参数
2. 调用 cancel 函数，取消请求

```js
import axios from 'axios';

// 获取 CancelToken 构造函数
const CancelToken = axios.CancelToken;

// 声明 cancle 函数的容器
let cancel;

axios.get('/user/12345', {
    cancelToken: new CancelToken(function executor(c) {
        // executor 函数接收一个 cancel 函数作为参数
        cancel = c;
    })
});

// 调用 cancle 函数取消请求
cancel('Operation canceled by the user.');
```
