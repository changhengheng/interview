import{_ as e,o as n,c as a,k as t,a as d}from"./chunks/framework.e0394e94.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JingJiang/resume/作用域样式与深度样式选择器.md","filePath":"Interview/JingJiang/resume/作用域样式与深度样式选择器.md","lastUpdated":null}'),r={name:"Interview/JingJiang/resume/作用域样式与深度样式选择器.md"},o=t("h2",{id:"作用域样式与深度样式选择器-面试说",tabindex:"-1"},[d("作用域样式与深度样式选择器 (面试说) "),t("a",{class:"header-anchor",href:"#作用域样式与深度样式选择器-面试说","aria-label":'Permalink to "作用域样式与深度样式选择器 (面试说)"'},"​")],-1),s=t("pre",null,[t("code",null,`不声明scoped, 样式是全局的, 可以匹配影响所有的组件
声明scoped, 只对当前组件的标签有效, 不会影响到其它组件的样式(子组件根标签除外)
	标签的变化:
		当前组件的所有标签都增加一个data自定义属性: data-v-2e8d0da5 => 用来标识当前组件的
		子组件的根标签也会有此data属性, 子标签没有
	样式的选择器变化: 
		选择器的最右边添加了当前组件data属性的选择  
			.test2 .t2[data-v-2e8d0da5] {
				color: red;
			}
		==> 能匹配当前组件的所有元素
		==> 还能匹配子组件根标签, 但不可能匹配其子标签
		==> 不能匹配任何外部的所有标签

使用深度选择器, 修改子组件内部任意标签的样式
	编码: 
		原生CSS
			.test2 >>> .t22 {
				color: red;
			}
		预编译器
			.test2 { 
				::v-deep .t22 {
					color: red;
				}
			}
	没用深度的结果
		.test2 .t2[data-v-2e8d0da5] {
			color: red;
		}
	用了深度的结果
		.test2[data-v-2e8d0da5] .t2 {
			color: red;
		}
	==> 属性选择从最右边转移到了左边  ==> 此选择对目标元素没有当前data属性的要求 ==> 可以匹配子组件任意标签
修改第三方组件库内部的样式: 
	方式一: 使用deep选择器
	方式二: 将修改库样式的代码定义为全局样式(但最好加上当前组件类名的限制)
`)],-1),c=[o,s];function _(i,l,p,m,h,u){return n(),a("div",null,c)}const g=e(r,[["render",_]]);export{f as __pageData,g as default};
