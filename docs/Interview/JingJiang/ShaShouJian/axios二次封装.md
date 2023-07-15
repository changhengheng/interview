# axios 二次封装（完整的 promise 的功能）

实现功能一共 8 点

## 基本：

1. 配置统一的请求基础路径（前缀 baseUrl）和超时限制（timeOut）
2. 添加进度条功能（NProgress）（也可以在路由守卫去做）
3. 返回响应 Response 里的 data，而不是返回响应 Response
4. 统一处理错误
    - 可以后续处理：传递携带错误信息的失败的 promsie
    - 也可以中断 Promise 链：返回一个 pending 状态的 promise，不再处理错误
5. 发请求时携带公共请求参数 token
6. 返回响应 Response，不返回响应里的 data；再根据 code / status 判断请求成功还是失败
    - 成功返回成功的数据
    - 失败提示失败的准确原因

::: tip

​    response.data.code：后台返回的 data 里的状态码

​    response.status： axios 本身响应结构自带的状态码，是来自服务器响应的 HTTP 响应状态码（1xx-5xx）

​    功能上的错误：请求是成功的，响应是成功的，请求所做的事失败了；在响应拦截器的成功回调里判断后台返回的状态码去做；

​    请求上的错误：请求可能是成功的也可能是一开始就失败的，请求的响应是失败的；在响应拦截器的失败回调判断 HTTP 响应状态码去做；

axios 响应结构：

```js
// 参考：https://www.axios-http.cn/docs/res_schema
{
    // `data` 由服务器提供的响应
    data: {},
    // `status` 来自服务器响应的 HTTP 状态码
    status: 200,
    // `statusText` 来自服务器响应的 HTTP 状态信息
    statusText: 'OK',
    // `headers` 是服务器响应头
    // 所有的 header 名称都是小写，而且可以使用方括号语法访问
    // 例如: `response.headers['content-type']`
    headers: {},
    // `config` 是 `axios` 请求的配置信息
    config: {},
    // `request` 是生成此响应的请求
    // 在 node.js 中它是最后一个 ClientRequest 实例 (in redirects)，
    // 在浏览器中则是 XMLHttpRequest 实例
    request: {}
}
```

:::

## 重要

7. 取消重复请求：

   意思：重复发两个相同的请求，取消上一次的请求，保留最新的请求

   取消请求的流程：

   1. 准备一个 map 对象
   2. 根据请求的 config 的内容生成一个唯一的 key
   3. 请求拦截器，从 map 对象找有没有 key，
      - 没有说明请求是第一次发，以 config 造出来的 key 为 key，以 cancle 为 value，添加到 map 当中去
      - 有就证明发过请求，通过 key 拿到 cancle，调用取消发送请求，并把 map 中的 key 删除，就取消调上一次的请求了
   4. 把最新的请求添加到 map 中
   5. 响应完成，不管是成功或失败了，响应拦截器的成功回调或失败回调里删除 key

   优化：加防抖防止多次发送相同请求

8. 取消上一个页面的请求（主要靠全局前置导航守卫去做）

    意思：当路由发生跳转，从上一个页面跳到新页面时，取消上一个页面的所有请求（因为没必要请求了）

    取消上一个页面的请求建立在取消重复请求的基础之上（也就是说，前者包括了后者的功能）。只不过不仅仅保存取消请求的函数，还保存当前匹配的路由路径（还是以 config 造出来的 key 为 key，但是以 cancle 函数 和 window.loaction.path（当前路由路径） 构成的对象为 value）

    流程：
    - 封装 axios 实现取消重复请求
    - 守卫：删除上一个页面的请求，只要跳转，就判断请求列表中的请求地址和要去的路由地址是否时同一个，不相同就取消请求

::: tip

2023-7-14 10:48:10

:::