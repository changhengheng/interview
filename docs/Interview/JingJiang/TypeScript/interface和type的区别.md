# interface 和 type 的区别
1. `interface` 只能定义引用数据类型，不能定义基本数据类型。而 `type` 都可以；
2. `interface` 定义对象类型不够灵活，`type` 都可以；
3. `type` 声明的类型不能重名，`interface` 声明的重命名会声明合并；
4. 两者继承的方法不同；
* `interface` 使用 extends 继承
* `type` 使用 & 关键字
5. 一般开发中对象类型用 `interface` 定义，数组类型用 `type`
