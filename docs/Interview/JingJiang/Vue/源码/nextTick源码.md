# nextTick

作用：等待页面最近一次更新完成，执行传递的回调

场景：数据更新，引起页面更新，此时我们需要获取真实 dom 去操作

数据更新是同步的，页面更新是异步，导致获取到的真实 dom 是 undefined
如果我们需要操作，就得把自己的操作放在 nextTick 传递的回调当中

本质：nextTick 其实最终本质是把我们自己的操作，变为异步

## 一、nextTick 的用法

nextTick() 函数调用：

1. 传递我们自己的回调
2. 也可以是直接调用（不传参），返回 promise，在 promise 的. then 当中传递我们自己的回调

## 二、nextTick 的执行过程

1. 定义一个数组 **callbacks** ，这个数组以后存储的都是函数

2. 定义一个 **flushCallbacks** 函数，拷贝 callbacks 进行遍历，调用其中的每一个函数

3. 定义 **timerFunc ** 函数，定义的时候是根据环境去判断，（写了四个判断）不同的环境定义不同的 timerFunc 函数

   作用：定义 timerFunc 函数，是想把 flushCallbacks 放到异步队列当中

   1. 先判断是否支持 promise

      如果支持，定义 timerFunc 函数内部会把 flushCallbacks 当做 promise 成功的回调，放到微队列

   2. 如果不支持 promise，那么再去判断是否支持 **MutationObserver**

      如果支持，那么就手动创建 dom 节点，去实例化 MutationObserver，传递 flushCallbacks 函数，通过实例化的对象去监视 dom 节点变化，如果 dom 节点发生变化，就会把传递的 flushCallbacks 放入微队列。定义 timerFunc 函数，内部只需要修改节点即可
      
      ::: tip
      
      MutationObserver 构造函数
      
      作用：用来监听页面 DOM 元素的变化，执行其中的回调
      
      用法：
      
      1. 实例化调用 MutationObserver ，传入一个回调，回调有两个默认参数
      
      2. 通过 observe 方法确定监听的 DOM 元素，并配置 MutationObserver 的回调接收 DOM 元素变化的信息通知
      
         配置：
      
         - characterData：监听声明的 target 节点上所有字符的变化
         - textNode.data = String(counter) 手动更新 DOM
      
      :::
      
      上面的两种都是微任务，下面的两种都是宏任务，timerFunc 在定义让 flushCallbacks 为异步的时候，微任务优先级高于宏任务
      
   3. 如果前面两种都不支持，那么再去看宏任务，先去判断是否支持 **setImmediate**，是在 node 环境下用，如果支持就调用 setImmediate, 把 flushCallbacks 传递当做参数，最终就会把 flushCallbacks 放到宏队列当中

   4. 如果上面都不支持，无论浏览器环境是什么，setTimeout 都是支持的，此时就会调用 setTimeout，把 flushCallbacks 放到宏队列

4. 定义 nextTick 函数
   1. 传递回调函数用法
      1. 新定义一个函数，判断是否传递了 **cb** 回调，如果传递了 cb 回调，就去执行 cb 回调，把这个定义的函数，push 到 callBacks 当中
      2. 调用 timerFuc, 真正的把 flashCallbacks 放到异步队列当中，后期执行线程执行完同步代码，就会去异步队列当中
         拿到 flushCallbacks 去执行，flushCallbacks 又是在遍历 callBacks 数组中的函数，就会挨个执行
   2. 没有传递回调函数，Promise 的用法
      1. 新定义一个函数，函数内部是判断是否传递了 cb 回调，如果没有传递了 cb 回调，就去执行**_resolve()**
         把这个定义的函数，push 到 callBacks 当中
      2. 调用 timerFuc, 真正的把 flashCallbacks 放到异步队列当中
      3. 判断 cb 没有传递并且 promise 支持，就返回一个 pending 状态 promise 的同时，把执行器函数当中 resolve，赋值给 _resolve，后期在执行上一步的 _resolve 的时候, 就会把返回的 pending 状态改为成功状态

## 拓展

数据更新是同步的，页面更新是异步的

现在我们使用 nextTick 让自己操作 dom 的任务也是异步了，凭什么自己操作的这个异步任务就会在页面更新的异步任务后面执行呢？

页面更新是异步的，源码当中页面的更新操作，也是使用 nextTick 去在队列排队

```js
<input ref="inputRef" v-if="inputShow" />

handleInput() {
  this.inputShow = true; 
  // 这个数据更新，导致页面会更新，页面更新的操作会通过 nextTick 去做异步处理，放到异步队列去执行
  // 我们接下来写的 nextTick，也会把我们自己的回调最终放到异步队列当中去执行
  // 都是通过 nextTick 去放队列，就有了先来后到
  // 因此修改数据的代码不能放在自己写的 nextTick 后面去
  nextTick(() => {
  	this.$refs.inputRef.focus(); 
  })
}
```