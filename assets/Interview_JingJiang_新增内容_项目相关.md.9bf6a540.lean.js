import{_ as e,o as n,c as s,z as t}from"./chunks/framework.3d6e08ae.js";const J=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JingJiang/新增内容/项目相关.md","filePath":"Interview/JingJiang/新增内容/项目相关.md"}'),l={name:"Interview/JingJiang/新增内容/项目相关.md"},o=t("hr",null,null,-1),i=t("pre",null,[t("code",null,`此文档是后台管理项目追加功能，任何后台管理都可以有这些功能
后期要在简历上去体现的，代码至少敲一遍
同学们必须能说出来用什么技术做了什么功能，在哪做的
`)],-1),a=t("hr",null,null,-1),r=t("p",null,"1、配置husky+commitLint+prettier 1.eslint ：利用 eslint 的配置实现了团队化开发成员的代码统一格式规范 2.prettier：使用 prettier 配合 eslint 让成员开发的代码格式更加美观 3.husky：通过配置 husky 管理 GIt 中的 Hooks 用于提交仓库时自动测试代码的规范检查 4.commitLint：配置 commit 文件使团队化开发时成员上传 git 仓库时规范注释前缀 配置参考详细md文档",-1),c=t("p",null,"2、在商品管理当中添加分类管理 刚开始玩一个组件库都是先去借鉴官网（就是从官网上去复制，复制的使用用心去看看属性都是啥意思，快速去掌握这个库） 分类管理当中我们使用vxe-table实现树状表格并进行懒加载实现",-1),p=t("p",null,"3、添加额外两个功能：新闻管理和地图管理 （所有的库都要去查一下官方网站） 1、需要去staticRoutes当中配置路由 2、实现新闻管理的静态布局 3、实现新闻管理的列表页 vxe-table实现虚拟滚动列表，不使用分页 对列表我们需要拖拽排序，使用sortablejs可以轻松实现 对列表实现点击排序",-1),_=t("pre",null,[t("code",null,`4、实现新闻管理的增和改
	使用vxe-table实现弹框
	使用element-plus的elrow和elcol实现数据回显展示
	使用element-plus的elform实现数据的收集
	使用@vueup/vue-quill库实现富文本编辑器

5、使用库实现文档导出功能
	在vxe-table当中有内置的文件导出功能可以实现导出其它格式文件
	我们可以使用jspdf + vue3-html2pdf去实现pdf文件的导出
		- jspdf插件装好了一定要去main.ts当中import一下，否则会报一个错误
		- 在页面显示的表格和需要导出的pdf表格都要写一遍，需要导出的pdf表格不会显示在页面，但是也要写
		- 如果pdf要导出pdf的表格，表格不能给高度，要不只能导出一页
		- 导出所有的的时候如果第一页是空白页，需要给设置一个合适的分页高度
			- paginate-elements-by-height="200000"
		- 如果要导出所有不能给表格设置高度，否则只能导出一页

6、实现地图管理
	百度地图api申请key
	百度地图的基本实现
		标记
		地址和经纬度的转换
		汽车驾驶
	使用vue-baidu-map-3x库实现地图
`)],-1),d=t("p",null,"4、实现首页的大屏展示和适配 1、原生echarts的使用 2、vue-echarts的使用 3、采用16:9模式的大屏适配 scale",-1),u=[o,i,a,r,c,p,_,d];function m(h,f,v,g,x,b){return n(),s("div",null,u)}const y=e(l,[["render",m]]);export{J as __pageData,y as default};
