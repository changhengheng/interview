# ref 和 reactive 的区别
* ref 可以用来定义基本类型和引用类型数据；reactive 只能用来定义引用类型数据（可以传基本值，但是会失去响应式）；
* ref 定义的数据如果是引用数据类型，实际是通过 reactive 来定义的。
* ref 定义的数据需要通过 .value 来读取或更新，reactive 可以直接操作数据；
* reactive 创建的代理对象的属性解构出来就不是响应式了；但如果一个对象的属性是 ref ，那么即使该属性是被解构出来使用，ref 也可以保证 .value 属性永远是响应式的；
* ref 操作对象的时候，可以通过 .value 修改整个对象，依然是响应式；reactive 操作对象的时候，不能整体修改对象，修改了就不是响应式数据了；
* watch 监视 reactive 默认开启深度监视，监视 ref 不会开启深度监视；
* 基本类型数据的原理是 Object.defineProperty，引用数据类型的原理是 Proxy/Reflect
- 修改 proxy 对象的值，会影响源对象；修改 ref 基本值的值不会影响源基本值，修改 ref 对象类型值的值会影响源对象（本质上还是proxy）；