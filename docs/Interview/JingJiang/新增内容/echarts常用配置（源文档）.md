## echarts常用配置

```
title: 标题组件
	text: '主标题文本'
	subtext: '子标题文本'
	textStyle: 主标题字体样式
		color: 颜色
		fontSize: 大小
	subtextStyle: 子标题字体样式
		color: 颜色
		fontSize: 大小
	left: 离容器左侧的距离
	top: 离容器上面的距离
	textAlign: 标题的对齐方式

legend: 图例组件
	orient: 多个图例的排列方式  horizontal/vertical
	left: 离容器左侧的距离
	top: 离容器上面的距离
	textStyle: 字体样式
		color: 颜色

grid: 网格组件
	left: 离容器左侧的距离
	top: 离容器上面的距离
	right: 离容器右侧的距离
	bottom: 离容器下侧的距离

xAxis: x轴组件
yAxis: y轴组件
	show: 是否显示
	data: X轴列表数据
	type: 坐标轴类型  category:类目轴 / value: 数值轴
	boundaryGap: 坐标轴两边是否留白
	min: 坐标轴刻度最小值
	max: 坐标轴刻度最大值
	axisLine: 坐标轴轴线
		show: 是否显示
	axisTick: 坐标轴刻度
		show: 是否显示
		alignWithLabel: 刻度线与标题对齐是否对齐
	splitLine: 分隔线
		lineStyle: 线的样式
            type:  线的类型  实线: 'solid' / 虚线: 'dotted',
            color: 颜色
	axisLabel: 坐标轴刻度标签
		show: 是否显示

tooltip: 提示框组件
	trigger: 触发方式  item:数据项图形触发 / axis: 坐标轴触发
	formatter: 指定提示的内容  (params) => 要显示的内容

series: 系列组件
	type: 图表类型  line: 折线图 / bar: 柱状图 / pie: 饼状图
    name: 系列名称
    data: 列表数据
    label: 图形上的文本标签
    	show: 是否显示 默认不显示
    	color: 字体颜色
    	position: 位置  top:上面 / right:右侧 / outside: 外部
    	formatter: 指定要显示的自定义内容
    	distance: 距离
	lineStyle: 线条样式
	itemStyle: 折线拐点标志的样式
	areaStyle: 区域填充样式
		opacity: 透明度
		color: 颜色
	smooth: 是否平滑曲线显示
	barWidth: 柱条的宽度
	showBackground: 是否显示柱条的背景色
	backgroundStyle: 柱条的背景样式
	
	center: 饼图的中心（圆心）坐标
	radius: 饼图的半径  如果是[value1, value2]就形成圆环图
	avoidLabelOverlap: 是否启用防止标签重叠, 圆环图都不开启
	itemStyle 图形样式
		borderColor: 描边颜色
        borderWidth: 描边线宽
    labelLine 标签的视觉引导线
    	length: 引导线第一段的长度
    	length2: 引导线第二段的长度
    	smooth: 是否平滑视觉引导线
    
color: 图例颜色列表
```











