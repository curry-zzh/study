1. 做react/vue项目，仿一个音乐类的
2. 做一个上线的业务  思路 架构  技能点


- react 组件由 组件component 实例 和一个css文件 styl
  create-react-app css/less styl
  不一定要用官方的  create-react-app ，下次自己的项目  我就可以从这个目录开始  项目模板


  - 单页应用？ single page application   SPA
  只有一个页面的应用 
  提升用户体验
- 点击路由时，不会重新刷新整个页面，而是根据路由的配置 把相应的组件显示出来
类文件大写，一个文件夹一个组件，便于维护和模块化
- 根据界面  可以分析出 头尾不动
- Loading 组件哪个目录下创建

components 路由级别组件
Loading 服务于任何listAPI 列表组件 通用组件

1. 数据请求阶段，显示loading
2. 数据来了后，隐藏他。
父组件，要给loading，传参