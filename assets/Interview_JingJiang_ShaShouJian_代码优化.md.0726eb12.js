import{_ as t,o as n,c as o,z as e}from"./chunks/framework.3d6e08ae.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JingJiang/ShaShouJian/代码优化.md","filePath":"Interview/JingJiang/ShaShouJian/代码优化.md"}'),a={name:"Interview/JingJiang/ShaShouJian/代码优化.md"},i=e("p",null,"computed有缓存，效率高 冻结数据",-1),s=e("p",null,"流程： 数据劫持流程： 修改的数据都是响应式的 递归、添加get和set，有消耗 如果有大量新数据只需要展示，不需要修改，就没必要变成响应式的，冻结数据即可",-1),_=e("p",null,"处理大量数据的方法： 1.分页 2.虚拟滚动列表 3.冻结响应式数据",-1),c=e("p",null,"vue-lazyload",-1),r=e("p",null,"开启gzip压缩： 生产阶段：nginx：gzi on 开发阶段：webpack配置",-1),l=[i,s,_,c,r];function d(p,h,u,g,m,J){return n(),o("div",null,l)}const v=t(a,[["render",d]]);export{S as __pageData,v as default};
