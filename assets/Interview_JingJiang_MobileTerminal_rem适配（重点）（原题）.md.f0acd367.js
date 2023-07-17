import{_ as e,o as r,c as l,O as i}from"./chunks/framework.3d6e08ae.js";const u=JSON.parse('{"title":"rem适配（重点）（原题）","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JingJiang/MobileTerminal/rem适配（重点）（原题）.md","filePath":"Interview/JingJiang/MobileTerminal/rem适配（重点）（原题）.md"}'),a={name:"Interview/JingJiang/MobileTerminal/rem适配（重点）（原题）.md"},m=i('<h1 id="rem适配-重点-原题" tabindex="-1">rem适配（重点）（原题） <a class="header-anchor" href="#rem适配-重点-原题" aria-label="Permalink to &quot;rem适配（重点）（原题）&quot;">​</a></h1><h2 id="搜狐、唯品会的移动端页面用的此方案-最终我们要做的动态的拿到布局视口宽度-10求出1rem的字体大小-设置给html即可" tabindex="-1">搜狐、唯品会的移动端页面用的此方案（最终我们要做的动态的拿到布局视口宽度 / 10求出1rem的字体大小，设置给html即可） <a class="header-anchor" href="#搜狐、唯品会的移动端页面用的此方案-最终我们要做的动态的拿到布局视口宽度-10求出1rem的字体大小-设置给html即可" aria-label="Permalink to &quot;搜狐、唯品会的移动端页面用的此方案（最终我们要做的动态的拿到布局视口宽度 / 10求出1rem的字体大小，设置给html即可）&quot;">​</a></h2><ul><li>以设计稿为准，把设计稿宽度作为 10rem，把设备宽度等分为 10rem，保持等比；</li><li>把设备宽度 / 10 作为根元素字体大小即可；</li></ul><p>原理：书写元素样式的方法</p><ul><li>设计稿看作是 10rem，设计稿的宽度我们是知道的，这样可以求出设计稿的每 rem 值为多少 px</li><li>在写样式的时候，设计稿上 div 标注的 px / 设计稿 1rem 的 px 值，就可以得到盒子在设计稿上的 rem 占比</li><li>因为根元素字体大小为设备宽度 1 / 10, 在手机这边布局的时候，直接写这个 rem 值即可得到等比</li></ul><p>唯品会适配方案：</p><ul><li>优点：可以在计算设备的1rem字体的时候，直接除以10，比较简单</li><li>缺点：我们在去计算元素在设计稿所占的rem值（后期要在设备上所写的rem值），就比较麻烦，小数也比较多</li></ul><h2 id="淘宝移动端页面用的方案" tabindex="-1">淘宝移动端页面用的方案 <a class="header-anchor" href="#淘宝移动端页面用的方案" aria-label="Permalink to &quot;淘宝移动端页面用的方案&quot;">​</a></h2><ul><li>以设计稿为准，设计稿上直接把 100px 作为 1rem，得到设计稿的总 rem 值，作为设备总的宽度 rem 值；</li><li>把设备宽度 / 得到的 rem 值 作为根元素字体大小即可</li></ul><p>原理：书写元素样式的方法</p><ul><li>在写样式的时候，设计稿设计值/100，即得到设备上该写的rem值</li></ul><p>淘宝的适配方案</p><ul><li>优点：设计稿这边100px做为1rem,后期求元素在设计稿这边的rem（就是我们要在设备上写的rem值），就很好求，直接小数点往前走两位</li><li>缺点：计算设备的1rem字体的时候，比较复杂，也可能出现很多小数</li></ul>',13),t=[m];function n(o,_,s,c,h,p){return r(),l("div",null,t)}const f=e(a,[["render",n]]);export{u as __pageData,f as default};
