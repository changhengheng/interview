# 大屏适配

## rem 适配



## scale 缩放适配

公式：屏宽/设计稿宽>屏高/设计稿高? 屏高/设计稿高: 屏宽/设计稿宽

注意点：
1. 缩放的元素不能写百分比，必须写成固定初始宽高（以设计图为准）
::: tip
最外层盒子放的背景，必须写百分百宽高——背景永远占满屏
:::
2. 让缩放的元素盒子永远位于最外层盒子的正中心（水平垂直居中）
::: tip
无论横向还是纵向放大，无论是左右留白还是上下留白，缩放的元素盒子永远位于背景中
:::
3. 视口一旦发生变化，我们需要计算缩放比，设置给内容区（缩放的元素盒子）
::: tip
使用 window.onresize 将缩放比动态设置给内容区盒子
:::

::: warning
1. 一上来就调一次，做一次适配，因为不知道第一次打开页面时的环境
2. 注意适配 scale 覆盖水平垂直居中 translate 的问题，动态设置 scale 时也设置好 translate
3. 注意 scale 缩放基点的问题：以左上角为基点
:::

```js
const resize = () => {
    let dw = document.documentElement.clientWidth
    let dh = document.documentElement.clientHeight
    let tw = 1440 //后期设计稿上给的宽和高
    let th = 757

    let scale = dw / tw > dh / th ? dh / th : dw / tw

    content.value.style.transform = `scale(${scale}) translate(-50%, -50%)`
}
```
