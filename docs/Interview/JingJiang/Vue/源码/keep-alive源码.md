# keep-alive

作用：keepalive 是一个内置的组件，这个组件可以缓存组件

传递的属性：

- include: 指定要缓存的是哪些组件
- exclude: 指的是除了哪些组件，其余的都缓存
- max: 最大缓存组件的个数

过程：

1. 执行 created

   1. 准备两个容器，一个对象，一个数组，对象当中后期存的就是我们缓存的组件对象，数组当中存的是缓存的组件对象的 key

      - 对象当中

        ```js
         this.cache = Object.create(null)  // {key1: 组件1, key2: 组件2}
    
        ```

      - 数组当中

        ```js
        this.keys = [] // [key2,key4,key5,key3,key1]  一旦key1对应的组件被重新挂载 => [key2, key1]
        // 通过这个数组实现LRU2
        ```

2. 执行 render 函数创建虚拟 dom

   1. 先通过 this.$slots.default（插槽：传给keep-alive缓存的组件实际上是传给了默认插槽）拿到缓存的组件，进而拿到组件的虚拟 dom 和 name

   2. 判断 include 和 exclude 是不是匹配我们拿到的 name
      
      如果我们的那么 **不在 include 或者在 exclude** 当中，代表不缓存，直接返回拿到的虚拟 dom  vnode（虚拟DOM节点）

   3. 先拿到之前 created 当中创建的两个容器，接下来拿 vnode 的 key，如果有就直接拿，没有去添加

   4. 用 key 去从 cache 当中看看有没有缓存过这个 vnode

        如果有，直接从 vnode 去获取组件实例（组件实例存放在vnode的componentInstance属性上），组件实例不再从新创建，直接使用

            LRU 的实现（保持要最新的要缓存的vnode的key永远处于数组的最右侧）

            1. 先从 keys 数组当中把存在的这个 vnode 的 key 删除
            2. 再从最右侧去 push 进去这个 keys 数组，保证最近使用的缓存的 vnode 的 key 永远处于数组的右侧

        如果没有，在 this 身上把当前 vnode 和 key 暂存在两个属性 vnodeToCache 和 keyToCache

   5. 最后返回 vnode

3. 执行 mounted：专门调用函数去缓存组件 vnode   
      
    调用 this.cacheVNode()，缓存当前组件

    并且去监视 include 和 exclude 的改变，动态删除不再缓存的组件

    this.cacheVNode() 函数当中在真正去缓存没有缓存的组件

    1. 判断有没有在 this.vnodeToCache 身上暂存 vnode
    2. 如果有，那么就构建要缓存的组件 vnode，进行真正的缓存
    3. 把暂存的 key，this.keyToCatch 添加到 keys 数组的最右侧
    4. 判断如果超过了缓存的最大数值，那么就调用 pruneCacheEntry(cache, keys[0], keys, this._vnode)，从 cache 当中把数组当中第一个 key 对应的组件 vnode 删除，还要从 keys 当中把第一个 key 给删除

::: tip
prune /pruːn/ 修剪
:::