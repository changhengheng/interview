# 谈一谈websocket（比http牛逼）
* 概念：WebSocket 是 HTML5 提供的一种浏览器与服务器进行**全双工通讯**的网络协议，属于应用层协议。它基于 TCP 传输协议，并复用 HTTP 的握手通道。浏览器和服务器只需要完成一次（三次）握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。
* 特点
    - 服务器可以向客户端主动推动消息，客户端也可以主动向服务器推送消息。
    - 没有同源限制，客户端可以与任意服务器通信。
    - 协议标识符是ws，服务器网址就是 URL。
    ```js
        document.querySelector("button").onclick = function() {
            let mySocket = new WebSocket("ws://localhost:9999");

            mySocket.addEventListener("open", () => {
                console.log("socket已链接");
            });

            mySocket.addEventListener("message", (event) => {
                console.log("接受到服务器的数据", event.data);
                mySocket.send("我已经知道链接成功，给服务器发送数据," + "哈哈");
            });
        };
    ```
- 使用
    - 客户端
        - new WebSocket() 创建一个websocket对象，参数是服务器响应的 URL。
        - 事件
            - open:用于指定连接成功后的回调函数。
            - message:用于指定当从服务器接受到信息时的回调函数，e.data。
            - close:用于指定连接关闭后的回调函数。
        - 方法
            - close 关闭当前链接。
            - send 传输数据至服务器
		- 服务器
			- ws 包的使用
				- ws是 一个 WebSocket 客户端和服务器 Node.js库。
				- 暴露一个WebSocketServer构造函数，new 调用得到一个 wss 服务对象
				- 服务对象绑定connection事件，默认传递一个ws实例，表示这个WebSocket链接
				- 通过绑定事件和调用方法，就可以向服务端发送数据
				- （node环境通过webpack配置一个js文件是module类型，可以使用ES6模块化）

- 应用到
    - 主要用于即时聊天，实时传输音视频数据，大屏展示实时传递数据等
	
- 拓展
    - 想知道服务器数据的实时变化（可视化大屏的柱状图）
    - 解决方案：
        - 心跳请求
        - websocket

    - 支付用的心跳请求

::: tip
websocket 传输的数据的格式一般都是字符串，需要使用 JSON.stringify 进行序列化
:::
