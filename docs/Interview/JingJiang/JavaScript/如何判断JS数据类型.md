# 如何判断JS数据类型

- typeof操作符 
    - 判断一个**值**的类型，返回一个小写的值的类型的字符串
    - 可以精确判定8种数据类型中的5种
- instanceof
	- 用来精确判断引用类型数据的类型
    - A instanceof B:
		- B是一个构造函数，A是一个实例对象，判断B的原型对象是否在A的原型链上（判断A是不是B的实例对象）
		- 如果存在则返回true 否则返回false，不是对象实例也返回false
		- 判断一个值是不是数组：A instanceof Array
		- 判断一个值是不是对象：A instanceof Object
- 相等和全等操作符 
    - 可以判定 null 和 undefined，因为这两种类型只有一个值：a === null/undefined
- typeof、instanceof、相等和全等，三种方式结合起来可以判断任意数据的类型

- Object.prototype.toString.call(obj).slice(8,-1) 判断任意数据的数据类型，结果是大写的字符串。只有对象的toString调用才有[object 数据类型]的效果，所以需要改变this指向借用对象的toString才能判断其他数据的数据类型

- Array.isArray() 判断一个值是否是数组类型