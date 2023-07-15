# Vue3 响应式数据原理 **************************

vue2 通过 Object.defineProperty 做的，不能监视属性的新增和删除  所以有 $set 和 $delete

vue3 通过 proxy 和 reflect 去实现

::: tip
proxy 拦截操作
reflect 操作数据
:::

* 创建代理对象，可以对代理对象的增删改查全部进行监视捕捉, 因此 vue3 废弃了 $set 和 $delete
* 当用户访问代理对象的属性时，触发 get 捕捉器，在捕捉器当中会通过反射返回源对象的值，同时进行依赖收集
* vue2 收集的依赖是 watcher, 它里面收集的是 effect 函数

* 当用户设置代理对象的属性时，触发 set 捕捉器，在捕捉器当中通过反射设置源对象的属性值，同时候派发更新页面
* 利用 map 和 set 去，找到 dep 的 set，让 dep 去遍历所有的 effect 去执行修改页面
