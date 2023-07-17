import{_ as s,o as n,c as a,O as l}from"./chunks/framework.3d6e08ae.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JingJiang/新增内容/echarts常用配置（源文档）.md","filePath":"Interview/JingJiang/新增内容/echarts常用配置（源文档）.md"}'),p={name:"Interview/JingJiang/新增内容/echarts常用配置（源文档）.md"},e=l(`<h2 id="echarts常用配置" tabindex="-1">echarts常用配置 <a class="header-anchor" href="#echarts常用配置" aria-label="Permalink to &quot;echarts常用配置&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">title: 标题组件</span></span>
<span class="line"><span style="color:#A6ACCD;">	text: &#39;主标题文本&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	subtext: &#39;子标题文本&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	textStyle: 主标题字体样式</span></span>
<span class="line"><span style="color:#A6ACCD;">		color: 颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">		fontSize: 大小</span></span>
<span class="line"><span style="color:#A6ACCD;">	subtextStyle: 子标题字体样式</span></span>
<span class="line"><span style="color:#A6ACCD;">		color: 颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">		fontSize: 大小</span></span>
<span class="line"><span style="color:#A6ACCD;">	left: 离容器左侧的距离</span></span>
<span class="line"><span style="color:#A6ACCD;">	top: 离容器上面的距离</span></span>
<span class="line"><span style="color:#A6ACCD;">	textAlign: 标题的对齐方式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">legend: 图例组件</span></span>
<span class="line"><span style="color:#A6ACCD;">	orient: 多个图例的排列方式  horizontal/vertical</span></span>
<span class="line"><span style="color:#A6ACCD;">	left: 离容器左侧的距离</span></span>
<span class="line"><span style="color:#A6ACCD;">	top: 离容器上面的距离</span></span>
<span class="line"><span style="color:#A6ACCD;">	textStyle: 字体样式</span></span>
<span class="line"><span style="color:#A6ACCD;">		color: 颜色</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">grid: 网格组件</span></span>
<span class="line"><span style="color:#A6ACCD;">	left: 离容器左侧的距离</span></span>
<span class="line"><span style="color:#A6ACCD;">	top: 离容器上面的距离</span></span>
<span class="line"><span style="color:#A6ACCD;">	right: 离容器右侧的距离</span></span>
<span class="line"><span style="color:#A6ACCD;">	bottom: 离容器下侧的距离</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">xAxis: x轴组件</span></span>
<span class="line"><span style="color:#A6ACCD;">yAxis: y轴组件</span></span>
<span class="line"><span style="color:#A6ACCD;">	show: 是否显示</span></span>
<span class="line"><span style="color:#A6ACCD;">	data: X轴列表数据</span></span>
<span class="line"><span style="color:#A6ACCD;">	type: 坐标轴类型  category:类目轴 / value: 数值轴</span></span>
<span class="line"><span style="color:#A6ACCD;">	boundaryGap: 坐标轴两边是否留白</span></span>
<span class="line"><span style="color:#A6ACCD;">	min: 坐标轴刻度最小值</span></span>
<span class="line"><span style="color:#A6ACCD;">	max: 坐标轴刻度最大值</span></span>
<span class="line"><span style="color:#A6ACCD;">	axisLine: 坐标轴轴线</span></span>
<span class="line"><span style="color:#A6ACCD;">		show: 是否显示</span></span>
<span class="line"><span style="color:#A6ACCD;">	axisTick: 坐标轴刻度</span></span>
<span class="line"><span style="color:#A6ACCD;">		show: 是否显示</span></span>
<span class="line"><span style="color:#A6ACCD;">		alignWithLabel: 刻度线与标题对齐是否对齐</span></span>
<span class="line"><span style="color:#A6ACCD;">	splitLine: 分隔线</span></span>
<span class="line"><span style="color:#A6ACCD;">		lineStyle: 线的样式</span></span>
<span class="line"><span style="color:#A6ACCD;">            type:  线的类型  实线: &#39;solid&#39; / 虚线: &#39;dotted&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            color: 颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">	axisLabel: 坐标轴刻度标签</span></span>
<span class="line"><span style="color:#A6ACCD;">		show: 是否显示</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">tooltip: 提示框组件</span></span>
<span class="line"><span style="color:#A6ACCD;">	trigger: 触发方式  item:数据项图形触发 / axis: 坐标轴触发</span></span>
<span class="line"><span style="color:#A6ACCD;">	formatter: 指定提示的内容  (params) =&gt; 要显示的内容</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">series: 系列组件</span></span>
<span class="line"><span style="color:#A6ACCD;">	type: 图表类型  line: 折线图 / bar: 柱状图 / pie: 饼状图</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: 系列名称</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: 列表数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    label: 图形上的文本标签</span></span>
<span class="line"><span style="color:#A6ACCD;">    	show: 是否显示 默认不显示</span></span>
<span class="line"><span style="color:#A6ACCD;">    	color: 字体颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">    	position: 位置  top:上面 / right:右侧 / outside: 外部</span></span>
<span class="line"><span style="color:#A6ACCD;">    	formatter: 指定要显示的自定义内容</span></span>
<span class="line"><span style="color:#A6ACCD;">    	distance: 距离</span></span>
<span class="line"><span style="color:#A6ACCD;">	lineStyle: 线条样式</span></span>
<span class="line"><span style="color:#A6ACCD;">	itemStyle: 折线拐点标志的样式</span></span>
<span class="line"><span style="color:#A6ACCD;">	areaStyle: 区域填充样式</span></span>
<span class="line"><span style="color:#A6ACCD;">		opacity: 透明度</span></span>
<span class="line"><span style="color:#A6ACCD;">		color: 颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">	smooth: 是否平滑曲线显示</span></span>
<span class="line"><span style="color:#A6ACCD;">	barWidth: 柱条的宽度</span></span>
<span class="line"><span style="color:#A6ACCD;">	showBackground: 是否显示柱条的背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">	backgroundStyle: 柱条的背景样式</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	center: 饼图的中心（圆心）坐标</span></span>
<span class="line"><span style="color:#A6ACCD;">	radius: 饼图的半径  如果是[value1, value2]就形成圆环图</span></span>
<span class="line"><span style="color:#A6ACCD;">	avoidLabelOverlap: 是否启用防止标签重叠, 圆环图都不开启</span></span>
<span class="line"><span style="color:#A6ACCD;">	itemStyle 图形样式</span></span>
<span class="line"><span style="color:#A6ACCD;">		borderColor: 描边颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">        borderWidth: 描边线宽</span></span>
<span class="line"><span style="color:#A6ACCD;">    labelLine 标签的视觉引导线</span></span>
<span class="line"><span style="color:#A6ACCD;">    	length: 引导线第一段的长度</span></span>
<span class="line"><span style="color:#A6ACCD;">    	length2: 引导线第二段的长度</span></span>
<span class="line"><span style="color:#A6ACCD;">    	smooth: 是否平滑视觉引导线</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">color: 图例颜色列表</span></span></code></pre></div>`,2),t=[e];function o(c,A,C,i,r,y){return n(),a("div",null,t)}const h=s(p,[["render",o]]);export{d as __pageData,h as default};
