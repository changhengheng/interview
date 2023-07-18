import{_ as s,o as l,c as n,O as o}from"./chunks/framework.3d6e08ae.js";const A=JSON.parse('{"title":"谈一谈websocket（比http牛逼）","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JingJiang/fuwuduan/websocket.md","filePath":"Interview/JingJiang/fuwuduan/websocket.md"}'),a={name:"Interview/JingJiang/fuwuduan/websocket.md"},p=o(`<h1 id="谈一谈websocket-比http牛逼" tabindex="-1">谈一谈websocket（比http牛逼） <a class="header-anchor" href="#谈一谈websocket-比http牛逼" aria-label="Permalink to &quot;谈一谈websocket（比http牛逼）&quot;">​</a></h1><ul><li>概念：WebSocket 是 HTML5 提供的一种浏览器与服务器进行<strong>全双工通讯</strong>的网络协议，属于应用层协议。它基于 TCP 传输协议，并复用 HTTP 的握手通道。浏览器和服务器只需要完成一次（三次）握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>允许数据在两个方向上同时传输</p></div><ul><li>特点 <ul><li>服务器可以向客户端主动推动消息，客户端也可以主动向服务器推送消息。</li><li>没有同源限制，客户端可以与任意服务器通信。</li><li>协议标识符是ws，服务器网址就是 URL。</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mySocket</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">WebSocket</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ws://localhost:9999</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">mySocket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">open</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">socket已链接</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">mySocket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">接受到服务器的数据</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">mySocket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">我已经知道链接成功，给服务器发送数据,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">哈哈</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span></code></pre></div></li></ul><ul><li><p>使用</p><ul><li>客户端 <ul><li>new WebSocket() 创建一个websocket对象，参数是服务器响应的 URL。</li><li>事件 <ul><li>open:用于指定连接成功后的回调函数。</li><li>message:用于指定当从服务器接受到信息时的回调函数，e.data。</li><li>close:用于指定连接关闭后的回调函数。</li></ul></li><li>方法 <ul><li>close 关闭当前链接。</li><li>send 传输数据至服务器</li></ul></li><li>服务器 <ul><li>ws 包的使用 <ul><li>ws是 一个 WebSocket 客户端和服务器 Node.js库。</li><li>暴露一个WebSocketServer构造函数，new 调用得到一个 wss 服务对象</li><li>服务对象绑定connection事件，默认传递一个ws实例，表示这个WebSocket链接</li><li>通过绑定事件和调用方法，就可以向服务端发送数据</li><li>（node环境通过webpack配置一个js文件是module类型，可以使用ES6模块化）</li></ul></li></ul></li></ul></li></ul></li><li><p>应用到</p><ul><li>主要用于即时聊天，实时传输音视频数据，大屏展示实时传递数据等</li></ul></li><li><p>拓展</p><ul><li><p>想知道服务器数据的实时变化（可视化大屏的柱状图）</p></li><li><p>解决方案：</p><ul><li>心跳请求</li><li>websocket</li></ul></li><li><p>支付用的心跳请求</p></li></ul></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>websocket 传输的数据的格式一般都是字符串，需要使用 JSON.stringify 进行序列化</p></div>`,6),e=[p];function t(c,r,F,y,i,D){return l(),n("div",null,e)}const C=s(a,[["render",t]]);export{A as __pageData,C as default};