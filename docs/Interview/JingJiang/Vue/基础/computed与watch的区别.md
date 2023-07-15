# computed 与 watch 的区别

- wacth 监听已有数据。 computed 通过已有数据计算新的数据。
- computed 有缓存；wacth 没有缓存；
- computed 不支持异步，必须同步返回计算结果；watch 支持异步，可以在异步操作后更新数据显示；
- computed 能完成的 ，watch 都能完成。但是，watch 能做的，computed 不一定能做。


- 计算属性只是监视了使用到的数据，watch 可以深度监视
- wacth：一对多或者一对一：一个属性的变化可以同时被多个属性监听； computed 多对一或者一对一：可以由多个或一个数据计算出一个新的数据；

* 选择:
    - 如果是根据已有数据计算出一个新数据  ==> computed
    - 如果涉及到异步操作 / 深度监视 ==> watch
    - 一旦一个数据变化， 我们需要做一系列操作 ===> watch
