import{_ as a,o as e,c as p,U as l}from"./chunks/framework.e0394e94.js";const f=JSON.parse('{"title":"call、apply和bind的区别","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JingJiang/JavaScript/call、bind、apply.md","filePath":"Interview/JingJiang/JavaScript/call、bind、apply.md","lastUpdated":null}'),n={name:"Interview/JingJiang/JavaScript/call、bind、apply.md"},t=l(`<h1 id="call、apply和bind的区别" tabindex="-1">call、apply和bind的区别 <a class="header-anchor" href="#call、apply和bind的区别" aria-label="Permalink to &quot;call、apply和bind的区别&quot;">​</a></h1><pre><code>    call、apply做了两件事：
</code></pre><p>1、改变this指向 2、调用函数</p><p>fn.call(obj)</p><p>临时借用：当次调用时，fn内部this指向第一个参数；当次调用完成后，后期fn内部this指向还是window</p><pre><code>    bind:
</code></pre><p>1、改变this指向 2、返回一个新函数</p><pre><code>        fn.bind(obj)

            永久借用：bind不会直接调用函数；返回一个新的函数，新的函数内部this被永久改变
</code></pre><p>call和apply的唯一区别是call接收一个参数列表，apply接收一个数组 bind也接收一个参数列表</p>`,9),i=[t];function c(d,r,o,s,_,b){return e(),p("div",null,i)}const y=a(n,[["render",c]]);export{f as __pageData,y as default};
