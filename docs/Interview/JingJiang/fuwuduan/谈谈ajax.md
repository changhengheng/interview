# 谈谈ajax
* new 调用 XMLHttpRequest() 创建xhr对象
* 调用open初始化一个请求，参数是请求方式和请求地址
* 调用send发送一个请求
* 绑定onreadystatechange事件，处理服务端返回的结果

```js
	// 1. 创建 xhr 对象
	const xhr = new XMLHttpRequest();
	// 2. 设置请求方法和请求地址
	xhr.open('GET', 'http://xxx/xxx');
	// 3. 发送请求
	xhr.send();
	// 4. 绑定事件，处理服务端返回的结果
	xhr.onreadystatechange = function() {
	    /*
	     判断readyState，等于4请求才完成了（但是不知道成功/失败）
		 0 － （未初始化）还没有调用send()方法
	     1 － （载入）已调用send()方法，正在发送请求
	     2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
	     3 － （交互）正在解析响应内容
	     4 － （完成）响应内容解析完成，可以在客户端调用了
	  */
	    if (xhr.readyState === 4) {
	        // 判断响应状态码是否2xx
	        if (xhr.status >= 200 && xhr.status < 300) {
	            // 成功
	            console.log(xhr.response);
	        } else {
	            // 失败
	        }
	    }
	}
```
