import{_ as l,o as i,c as e,U as t}from"./chunks/framework.e0394e94.js";const m=JSON.parse('{"title":"商品汇后台管理","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JingJiang/新增内容/添加功能点.md","filePath":"Interview/JingJiang/新增内容/添加功能点.md","lastUpdated":1689411224000}'),a={name:"Interview/JingJiang/新增内容/添加功能点.md"},p=t('<h1 id="商品汇后台管理" tabindex="-1">商品汇后台管理 <a class="header-anchor" href="#商品汇后台管理" aria-label="Permalink to &quot;商品汇后台管理&quot;">​</a></h1><h3 id="一-项目简介" tabindex="-1">一. 项目简介 <a class="header-anchor" href="#一-项目简介" aria-label="Permalink to &quot;一. 项目简介&quot;">​</a></h3><h4 id="_1-项目介绍" tabindex="-1">1. 项目介绍 <a class="header-anchor" href="#_1-项目介绍" aria-label="Permalink to &quot;1. 项目介绍&quot;">​</a></h4><p>项目名称：尚品汇后台管理</p><p>尚品汇后台管理是一个 B2C 的后台管理系统，面向的是企业内部的工作人员，是一个综合的电商对应的后台管理系统，可以查看商品管理，权限管理。可以给企业完成订单，新闻，用户，商品的 sku，spu 的增删改查。</p><h4 id="_2-项目技术体系" tabindex="-1">2. 项目技术体系 <a class="header-anchor" href="#_2-项目技术体系" aria-label="Permalink to &quot;2. 项目技术体系&quot;">​</a></h4><p>eslint+prettier+husky+commitLint+vxe-table+sortablejs+vue3-html2pdf+localforage+scss+lodash+@vueup/vue-quill+websocket+element-Plus+TypeScript</p><ul><li>ECharts 库：可以用于创建各种图表和可视化效果</li><li>ESLint 和 Prettier：可以用于统一代码风格，检查和修复代码的格式和质量。</li><li>Husky 和 CommitLint 提交前缀：可以用于提交代码时格式化代码规范提交前缀。</li><li>VXE-Table：可以快速搭建表格视图。 <ul><li>主要是配置</li></ul></li><li>Vue3-HTML2PDF 和 jsPDF：可以将 HTML 导出为 PDF 文件格式。 <ul><li>jspdf插件装好了一定要去main.ts当中import一下，否则会报一个错误</li><li>在页面显示的表格和需要导出的pdf表格都要写一遍，需要导出的pdf表格不会显示在页面，但是也要写</li><li>如果pdf要导出pdf的表格，表格不能给高度，要不只能导出一页</li><li>导出所有的的时候如果第一页是空白页，需要给设置一个合适的分页高度 <ul><li>paginate-elements-by-height=&quot;200000&quot;</li></ul></li></ul></li><li>LocalForage：可以实现数据本地化存储。 <ul><li>相对localStorage对比来说</li></ul></li><li>NProgress：可以为项目添加进度条以优化用户体验。</li><li>SortableJS：可以对指定元素进行拖拽。 <ul><li>实现拖拽行去排序</li><li>参考官方网站</li></ul></li><li>SCSS：可以用于调整页面样式。</li><li>Vue-Baidu-Map-3x：可以集成百度地图。</li><li>@vueup/vue-quill：可以用于创建在线编辑器。 <ul><li>参考npm找到官网</li></ul></li><li>Lodash：有节流防抖，深拷贝等功能的封装。</li><li>Element-Plus： 基于 Vue3 的 UI 框架快速搭建页面结构</li><li>TypeScript：对数据类型进行相应的约束。</li></ul><h3 id="二-项目实现功能" tabindex="-1">二.项目实现功能 <a class="header-anchor" href="#二-项目实现功能" aria-label="Permalink to &quot;二.项目实现功能&quot;">​</a></h3><p>使用 vue3+element-plus+typescript 完成目标</p><p>1.环境配置</p><blockquote><p>1.eslint ：利用 eslint 的配置实现了团队化开发成员的代码统一格式规范 2.prettier：使用 prettier 配合 eslint 让成员开发的代码格式更加美观 3.husky：通过配置 husky 管理 GIt 中的 Hooks 用于提交仓库时自动测试代码的规范检查 4.commitLint：配置 commit 文件使团队化开发时成员上传 git 仓库时规范注释前缀</p></blockquote><ol start="10"><li><p>为了实现数据大屏可视化的效果，我们使用了@kjgl77/datav-vue3 这个库加入动态边框。</p></li><li><p>为了更直观的展示数据我们使用了 Vue-echarts 上实现了折线图，饼图柱状图的展示，提升了用户观感体验。</p></li><li><p>为了实现 echarts 图表模拟数据的建立连接，我们使用了 websocket 技术。这样可以让数据更加流畅、高效地传输和展示。</p></li><li><p>为了模拟大量数据，我们采用了 json-server+mockjs 这个组合来构建新闻、订单的模拟数据。使用这个组合可以轻松地创建模拟数据，并且可以达到百万级数据的模拟。</p></li><li><p>在进行新闻、订单编辑的时候，我们使用了@vueup/vue-quill 插件提供了“在线编辑器”功能的集成。这个功能可以方便用户进行编辑，同时也提高了用户的使用体验。</p></li><li><p>为了实现订单或新闻以及用户的数据进行 PDF 格式的文件导出，我们使用了 html2PDF 和 jspdf 这两个库来完成。这样可以让用户方便地将数据导出为 PDF 文件。</p></li><li><p>为了实现菜单级的权限管理，我们使用了递归和深拷贝为动态路由添加，可以为用户添加删除不同的菜单。</p></li><li><p>为了实现按钮级的权限管理，我们封装了 v-has 的自定义指令，通过硬编码，实现不同用户不同按钮的操作权限控制。</p></li><li><p>为了实现进度条的添加我们使用了 Nprogress 插件，让用户体验更加的友好。</p></li><li><p>为了实现列表的虚拟滚动，我们采用了 VXE-table 的组件属性 配置，使得新闻、订单列表中的图片可以更加流畅地加载和展示。</p></li><li><p>为了实现表格在线编辑的作用，我们使用了 vxe-table 提供的组件属性。这样可以让用户更加方便地对表格进行编辑和管理。</p></li><li><p>为了让用户列表实现拖拽排序的功能，我们使用了 sortable 插件配合 vxe-table 来完成。这样可以让用户更加方便地对列表进行排序，提升用户体验。</p></li><li><p>为了实现树形表格懒加载的功能，我们使用了 vxe-table 树形表格配置，减少请求数据量加快了页面渲染效率。</p></li><li><p>为了更改 UI 组件的非父自定义组件样式，我们使用了<code>:deep()</code>进行深度样式选择，使页面更加美观。</p></li><li><p>为了提高表格页面渲染的效率，我们采用了 vxe-table 这个组件库来实现表格列表。这个组件库提供了许多优秀的功能和属性，如排序、筛选、分页等，可以方便地对表格进行操作和管理。</p></li></ol>',13),o=[p];function r(s,u,n,c,d,h){return i(),e("div",null,o)}const b=l(a,[["render",r]]);export{m as __pageData,b as default};
