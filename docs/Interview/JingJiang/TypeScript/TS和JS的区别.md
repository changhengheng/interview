# TS和JS的区别

1. TypeScript 引入了 JavaScript 中没有的“类”概念；
   1. public    相当于不写  公共的
   2. privite    私有的，只有在当前类中可以访问这个属性在，子类和外部无法访问
   3. protected 受保护的， 只有在当前类和子类中可以访问，在外部无法访问    
2. TypeScript 中引入了模块的概念，可以把声明、数据、函数和类封装在模块中；
3. JavaScript 没有重载概念，TypeScript 有可以重载；
4. TypeScript 增加了接口interface、泛型、类、类的多态、继承等；
5. TypeScript 对比 JavaScript 基础类型上，增加了 void/never/any/元组/枚举/以及一些高级类型。