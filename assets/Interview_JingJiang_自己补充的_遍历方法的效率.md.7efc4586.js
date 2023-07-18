import{_ as a,o as s,c as n,O as e}from"./chunks/framework.3d6e08ae.js";const y=JSON.parse('{"title":"遍历方法的效率","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JingJiang/自己补充的/遍历方法的效率.md","filePath":"Interview/JingJiang/自己补充的/遍历方法的效率.md"}'),t={name:"Interview/JingJiang/自己补充的/遍历方法的效率.md"},o=e(`<h1 id="遍历方法的效率" tabindex="-1">遍历方法的效率 <a class="header-anchor" href="#遍历方法的效率" aria-label="Permalink to &quot;遍历方法的效率&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// for循环   for..in   forEach  for...of</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// for循环是js当中最简单的遍历方法  主要是针对数组进行遍历的，效率不高，但是可以使用continue和break</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// for..in 循环主要是用来遍历对象的（遍历对象的可枚举属性的） 效率最低，原因是因为不但要遍历自身的属性还要遍历原型的</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// forEach 是数组的一个方法，主要页是用来遍历数组的，效率最高，但是不可以使用continue和break</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// for..of 是es6里面新加的一种遍历方法（前提必须是可迭代对象），效率没有forEach高（比其它的要高），也可以使用</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//可以使用continue和break，for..of只能针对可迭代对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//遍历对象最快的方法也是使用forEach 是把对象属性转化为数组然后进行遍历</span></span></code></pre></div>`,2),l=[o];function i(c,r,p,_,f,d){return s(),n("div",null,l)}const u=a(t,[["render",i]]);export{y as __pageData,u as default};
