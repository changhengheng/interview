# v-model 双向数据绑定原理

v-model 主要用于双向数据绑定（收集表单数据），它给元素绑定时，不同元素做法不一样：
v-model双向数据绑定本质就是对数据的读和写，读都是使用单向数据绑定去做，而写的话都是通过事件去处理
- 如果是文本类型元素（<input> 和 <textarea>）：绑定 value 属性去读取数据 和 input 事件去写数据；
- 如果是单选或多选元素（<input type="checkbox"> 和 <input type="radio">）：绑定 checked 属性和 change 事件；
- 如果是下拉列表元素（<select>）：绑定 value 属性和 change 事件；
- 如果不是上述这些元素（比如组件），会按照文本类型元素处理。
- Vue3中，给组件绑定的是 modelValue 属性和 update:modelValue 事件