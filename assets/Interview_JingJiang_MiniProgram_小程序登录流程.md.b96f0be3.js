import{_ as e,o as t,c as a,U as i}from"./chunks/framework.e0394e94.js";const u=JSON.parse('{"title":"小程序登录流程","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JingJiang/MiniProgram/小程序登录流程.md","filePath":"Interview/JingJiang/MiniProgram/小程序登录流程.md","lastUpdated":1689411224000}'),o={name:"Interview/JingJiang/MiniProgram/小程序登录流程.md"},n=i('<h1 id="小程序登录流程" tabindex="-1">小程序登录流程 <a class="header-anchor" href="#小程序登录流程" aria-label="Permalink to &quot;小程序登录流程&quot;">​</a></h1><p>目的：拿到 openid，拿到就说明登陆成功了</p><p>流程：</p><ol><li>客户端 wx.login 拿到 code （用户的登录凭证）</li><li>发送 code 给商户服务器</li><li>商家拿到 code+appid（小程序 ID）+secret（小程序密钥） 发送给微信服务器，获取 openId</li></ol><p>一般是在 app.js 当中做这些事，如果是 uniapp，是在 App.vue PonLaunch</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>当时还讲了拿 openId 怎么生成 token</p></div>',6),p=[n];function r(_,c,s,l,d,m){return t(),a("div",null,p)}const g=e(o,[["render",r]]);export{u as __pageData,g as default};
