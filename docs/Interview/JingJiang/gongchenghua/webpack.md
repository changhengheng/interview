# webpack

webpack 是一个JavaScript 应用程序的静态模块打包工具，可以将静态模块编译、打包和输出成一个或多个文件（bundles）。
- Entry：入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。
- Output：output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。
- Loader：loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只能解析 JavaScript
Json）。
- Plugins：插件则可以用于执行范围更广的任务。插件的范围包括，打包优化、压缩、定义环境变量等。
- Mode：模式，有生产模式 production 和开发模式 development
	
- Loader
    1. 处理样式资源
        - `style-loader` 动态创建一个 Style 标签，里面放置 Webpack 中 CSS 模块内容
        - `css-loader` 负责将 CSS 文件编译成 Webpack 能识别的模块
        - `less-loader` 将 Less 文件编译成 CSS 文件
        - `sass-loader` 将 Sass 文件编译成 CSS 文件
        - `stylus-loader` 将 Stylus 文件编译成 CSS 文件
        - `postcss-loader` 根据要求增加 CSS 的前缀(css 代码兼容性处理)
    2. 处理 js 资源
        - `babel-loader` 将 ES6 转化为 ES5(js 代码兼容性处理)
        - `eslint-loader` 过去用来进行 js 代码语法检查，最新 Webpack5 改用插件实现：eslint-webpack-plugin
    3. 加载其他资源
        - `file-loader` 过去用来转化图片、字体图标等资源，现在 Webpack5 内置了
        - `url-loader` 过去用来转化图片等资源，现在 Webpack5 内置了
        - `vue-loader` 用来编译 Vue 单文件组件
- Plugin
    1. `html-webpack-plugin` 简化创建 HTML 文件，配模板，最终创建index.html并自动引入打包的js
    2. `eslint-webpack-plugin` 用来进行 js 代码语法检查