# Promise

- 是什么？Promise是一个包含了状态和结果的对象
- 三种状态
    - `pending` 等待状态
    - `resolved / fulfilled` 成功状态
    - `rejected` 失败状态
            
- promise状态只能变化一次，只能：
    - `pending` --> `resolved`
    - `pending` --> `rejected`
    - 状态发生变化后不能再次改变
            
- 改变 promise 的状态并传递结果

    - 调用 `resolve()`, 改成成功状态
    - 调用 `reject()`, 改为失败状态

- promise 实例对象上的方法

    - `then` 接受两个回调（一般只接受一个），第一个是成功回调，第二个是失败回调
    - `catch` 接受一个回调，是失败回调
    - `finally` 接受一个回调，不管成功/失败都会触发
	
- promsie的作用：
    1. 解决回调地狱  
    2. 指定回调很灵活（请求前 请求后 拿到结果之后都可以指定）

- Promise 构造函数上的方法

    - Promise.resolve()：返回一个成功的 promise 对象，值为undefined
    - Promise.reject()：返回一个失败的 promise 对象，值为undefined
    - Promise.all():
        - 功能：可以将多个promise的实例包装成一个新的Promise实例
        - 参数：promise对象的数组
        - 返回值：
            - 当所有的promise实例都成功的时候，Promise.all()返回成功状态的promise对象，值为所有传入实例的结果数组
            - 如果所有的实例中，有一个失败了，则all直接失败的promise对象，值为失败的promise实例的值
    - Promise.allSettled():
        - 功能：可以将多个promise的实例包装成一个新的Promise实例
        - 参数：promise对象的数组
        - 返回值：allSettled会等待所有的promise对象全部执行完成，并直接返回一个成功的promise对象，promise对象的值是所有的promise实例的结果形成的一个数组
        - 应用：想要知道每一个promise的执行结果，可以使用Promise.allSettled()
		
    - Promise.race():
        - 参数：promise对象的数组
        - 功能：可以将多个promise的实例包装成一个新的Promise实例
        - 返回值：返回一个promise对象，一旦迭代器中某个promise实例成功或者失败，则race直接返回成功或者失败，值为第一个先得到结果的实例的值
        - 应用：想要知道第一个promise的执行结果，可以使用Promise.race()
	
- 使用场景：
    - 在项目中一般是使用 axios 发送请求时会使用，返回值是一个 promise 对象，结合 async await 来处理
    - 如果同时要发送多个请求的话，可以使用 Promise.all() 方法来处理
	- 后台管理页面请求初始化状态数据的时候，使用promsie.all