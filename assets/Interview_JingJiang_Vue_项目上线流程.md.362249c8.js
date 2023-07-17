import{_ as e,o as t,c as i,z as n,a as o}from"./chunks/framework.3d6e08ae.js";const J=JSON.parse('{"title":"nginx（自己搭一搭）","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JingJiang/Vue/项目上线流程.md","filePath":"Interview/JingJiang/Vue/项目上线流程.md"}'),a={name:"Interview/JingJiang/Vue/项目上线流程.md"},s=n("h1",{id:"nginx-自己搭一搭",tabindex:"-1"},[o("nginx（自己搭一搭） "),n("a",{class:"header-anchor",href:"#nginx-自己搭一搭","aria-label":'Permalink to "nginx（自己搭一搭）"'},"​")],-1),r=n("p",null,"项目上线",-1),c=n("pre",null,[n("code",null,`使用 cmd 打开目录，不要运行 exe 文件，运行 exe 后，后台会一直运行线程，刷新重新时需要找到后台运行的服务再清理，太麻烦

上线流程（nginx 作为 web 服务器，返回 index.html 页面，如果是在阿里云等云服务器，给一个公网 IP 地址，公网就可以访问）：

    前台
        1、路由模式改为 history
        2、build 打包
    nginx
        nginx 的配置文件 conf/nginx.conf
            server 默认监听 80 端口（http 默认端口）
            server_name 域名
            location / 域名带一个 /（根目录默认带一个 /）
                root html 返回文件的目录（根目录下的 html 目录，新建一个目录放项目，把项目目录粘贴过来）
                index 返回的文件（默认返回 index.html 文件）

    启动服务
        cmd nginx.exe
        localhost 访问服务

命令

    1. \`nginx\` 启动 nginx 服务
    2. \`nginx -s reload\`  重新加载配置文件，重启 nginx 服务
    3. \`nginx -s stop\` 快速关闭 nginx 服务
    4. \`nginx -s quit\` 等待工作进程处理完成后关闭 nginx 服务
`)],-1),l=n("p",null,"配置代理（上线后，没有本地开发服务器，vue.config.js 配置的代理就没用了。nginx可以配置代理服务）",-1),x=n("pre",null,[n("code",null,`    nginx.conf
        server {
            # location 可以写多个
            location /sph { # 路径前缀
                proxy_pass http://xxx.com/; # 转发到目标服务器地址
                rewrite ^/app-prod/(.*) /$1 break; # 路径重写
            }
        }

nginx 可以上线个人项目（私域服务器）
`)],-1),d=[s,r,c,l,x];function _(g,p,h,m,u,f){return t(),i("div",null,d)}const b=e(a,[["render",_]]);export{J as __pageData,b as default};
