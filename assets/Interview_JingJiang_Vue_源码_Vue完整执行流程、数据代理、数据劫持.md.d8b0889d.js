import{_ as e,o as n,c as a,k as t,a as d}from"./chunks/framework.e0394e94.js";const g=JSON.parse('{"title":"Vue完整执行流程","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/JingJiang/Vue/源码/Vue完整执行流程、数据代理、数据劫持.md","filePath":"Interview/JingJiang/Vue/源码/Vue完整执行流程、数据代理、数据劫持.md","lastUpdated":1689411224000}'),i={name:"Interview/JingJiang/Vue/源码/Vue完整执行流程、数据代理、数据劫持.md"},o=t("h1",{id:"vue完整执行流程",tabindex:"-1"},[d("Vue完整执行流程 "),t("a",{class:"header-anchor",href:"#vue完整执行流程","aria-label":'Permalink to "Vue完整执行流程"'},"​")],-1),r=t("p",null,"1、new Vue之前就做了很多事情 1-1、主要调用了一个initGlobalAPI(Vue) 给Vue添加了一堆属性和方法供我们之后使用 1-2、又调用了一堆xxxMixin initMixin(Vue) // 添加 Vue.prototype._init() stateMixin(Vue) // 给 Vue.prototype 添加 $set/$delete/$watch方法 eventsMixin(Vue) // 给 Vue.prototype 添加 $on/$once/$emit/$off方法 lifecycleMixin(Vue) // 给 Vue.prototype 添加 $forceUpdate/$destroy/_update方法 renderMixin(Vue) // 给 Vue.prototype 添加 $nextTick/_render方法",-1),s=t("pre",null,[t("code",null,`注意：除了上述两个比较重要的以外，还填了很多东西，只是我们不关注
`)],-1),u=t("p",null,"2、new Vue()开始 2-1、调用 this._init(options) 在 initMixin当中 2-2、又调用了一堆initxxx，给vm添加响应的属性和方法 2-3、调用beforCreate() 2-4、还是在this._init函数当中，接下来继续调用initState(vm) 去做数据代理和数据劫持 调用initState的时候，又调用了initData,这里面就是在做所谓的数据代理 在initData当中又去遍历data当中所有的key组成的数组，没个key都会调用",-1),p=t("pre",null,[t("code",null,`	proxy(vm, \`_data\`, key)来做数据代理

		******************
		通过Object.defineProperty给vm添加和data当中同名的所有属性
		当通过vm去读取属性值的时候，调用这个属性的get方法，最终返回的是data当中同名属性值
		当通过vm去修改属性值的时候，调用这个属性的set方法，最终修改的是data当中同名属性值	



	调用完proxy后，继续对data进行数据劫持，调用observe(data)
		在observe函数调用的时候继续调用new Observer(value, shallow, ssrMockReactivity)

		在new Observer当中继续拿到data的所有key组成的数组进行便利，再没个属性便利的时候调用
			defineReactive(value, key, NO_INIITIAL_VALUE, undefined, shallow, mock)

			*******************************
			1、给data每个key在劫持的时候都会创建一个dep实例，这个实例后期用来收集依赖，通过闭包保存

			2、通过Object.defineProperty把data当中所有的属性进行修改，添加get和set

				get
					除了返回data中的同名属性值以外，
					还要收集依赖（让dep当中保存依赖关系），后期修改有用

				set
					1、把最新的值改过来
					2、判断最新的值是不是对象，如果是继续递归去数据劫持
					3、通知dep当中所有收集的依赖，让对应的页面数据进行改变（修改页面）


			当访问vm身上的属性的时候，会出发vm身上属性的get方法，最终返回的是data当中同名属性值，此时又会出发
			data当中同名属性的get方法，此时就返回data当中同名属性的值，同时进行收集依赖，为了后期修改使用

			当修改vm身上的属性的时候，会出发vm身上属性的set方法，最终修改的是data当中同名属性，此时又会出发data
			当中同名属性的set方法，此时把新的值赋值给data同名属性，判断新值是不是对象，如果是继续递归进行数据劫持
			，最后通知dep当中收集的所有依赖去更新页面


2-5、调用created()

到此创建阶段实现完成，开始挂载

2-6、先调用vm.$mount
	进而调用mountComponent(this, el, hydrating)，开始执行beforeMount进入挂载前的生命周期

	定义一个updateComponent用来初始化渲染页面和后期更新页面，但是此时只是定义

	new Watcher()（就是依赖）,初始化渲染就是在new Watcher的时候去做的，内部会调用一次updateComponent

	updateComponent当中继续调用vm._update(vm._render(), hydrating)
		做了两件事
			1、先创建虚拟dom，vm._render()去做（把模板变成虚拟DOM）， 会获取data的数据，就会出发data属性的get,不但返回属性数据，还会收集依赖
				收集依赖就是让属性的dep去保存这次渲染创建的watcher，dep.subs存储渲染的watcher对象（dep身上还有一个id属性）
				watcher也会保存当前渲染数据的dep watcher.depIds保存dep的id，watcher.deps保存当前属性dep对象


			2、vm._update内部把虚拟dom转化为真实dom  

	注意：初始化渲染的时候，内部不会有diff算法，直接创建真实dom挂载
		 后期如果修改阶段，也会掉用这个函数，函数内部会创建新的虚拟dom，vm._render()去做
		 再去进行修改更新的时候就要diffing算法去对比



2-7、调用mounted，代表初始化渲染挂载完成
`)],-1),c=t("p",null,"更新： 修改this。xxxx发生数据变化，进入更新阶段 此时会触发数据劫持的set,set里面就会调用dep.notify（） 遍历dep.subs，里面存的是和这个数据相关的watcher，调用queueWatcher,把这些watcher全部添加到数组 定义flushQueue,函数，函数内部遍历queue队列当中所有的watcher去执行watcher.run() 但是此时并没有执行，后期通过nextTick把flushQueue放到异步队列去异步执行",-1),_=t("pre",null,[t("code",null,`调用watcher的run后面就会拿到watcher里面 存储的cb回调去调用，cb回调就会调到updateComponent
此时就又会去到vm._update(vm._render(), hydrating)去执行

又去创建新的虚拟dom节点，再去通过vm._update去更新页面，只是这一次更新，有新树和旧树，新树和旧树就会
进行diffing算法，直接去修改真实dom元素（修改的时候没有模版解析了，只会在初始化阶段解析一次模版，修改的时候
是直接修改的真实dom元素）
`)],-1),m=[o,r,s,u,p,c,_];function l(h,v,f,V,x,w){return n(),a("div",null,m)}const b=e(i,[["render",l]]);export{g as __pageData,b as default};
