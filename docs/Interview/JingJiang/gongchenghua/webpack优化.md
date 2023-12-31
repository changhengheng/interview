# Webpack 优化
	
- 提升开发体验
    - 打包时生成一些映射文件（.map文件）记录打包前后代码对应的位置，代码报错时会反向查找映射文件找到源码中的位置进行报错
    - 开发时使用 `Source Map` 让代码报错能有更加准确的错误提示。
    - 在生产阶段我们可以配置不生成map文件减小打包的体积
- 提升 webpack 打包构建速度
    - 模块热更新：
        - 使用 `HotModuleReplacement` 让开发时只重新 编译打包 更新了的代码，不变的代码使用缓存，从而使更新速度更快。
    - 排除、引入模块
        - 使用 `Include/Exclude` 排除或只检测某些文件，处理的文件更少，速度更快。
	- 减少代码体积
		- 摇树：使用 `Tree Shaking` 剔除了没有使用的多余代码，让代码体积更小。
- 优化代码运行性能
    - 代码分割：
        - 使用 `Code Split` 对代码进行分割成多个 js 文件，从而使单个文件体积更小，并行加载 js 速度更快。并通过 import 动态导入语法进行按需加载，从而达到需要使用时才加载该资源，不用时不加载资源。
    - 预加载模块：
        - 使用 `Preload / Prefetch` 对代码进行提前加载，等未来需要使用时就能直接使用，从而用户体验更好。