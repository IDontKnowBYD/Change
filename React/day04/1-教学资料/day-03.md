# react - 豆瓣电影案例

## 项目中使用的技术点

- 1 `ant-design` 组件库
- 2 `react-router-dom` 路由
- 3 `fetch` API，配合`Promise规范`
- 4 跨域获取数据
- 5 豆瓣电影 API

## ant-design - UI 组件库

- [antd](https://ant.design/index-cn)
- 说明：借助 Ant Design 组件库快速搭建页面
- 安装：`npm i -S antd`

### 基本使用

- 注意：该步骤中只引入了一个组件，但却引入了整个 ant 包和 css 样式
- 推荐：按需加载，即用到哪个组件就只把该组件的样式导入

```js
// 基础：导入 react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// 1. 导入 antd 组件
import { DatePicker } from 'antd'

// 2. 导入 样式
import 'antd/dist/antd.css'

// 3. 使用 日期选择 组件
ReactDOM.render(<DatePicker />, document.getElementById('app'))
```

### 按需加载 - 推荐使用方式

- 1 安装：`npm i -D babel-plugin-import`
- 2 配置`.babelrc`
- 说明：只需要导入我们使用的组件即可，不需要再单独的导入样式

```js
import React from 'react'
import ReactDOM from 'react-dom'

// 1. 导入 antd 组件
import { DatePicker } from 'antd'

// 2. 使用 日期选择 组件
ReactDOM.render(<DatePicker />, document.getElementById('app'))

// ---

// .babelrc 配置如下：
"plugins": [
    [ "import", { "libraryName": "antd", "style": "css" }]
]
```

## react-router

- [react router 官网](https://reacttraining.com/react-router/)
- [中文文档](https://react-router.docschina.org/)
- [react router github](https://github.com/ReactTraining/react-router)
- 安装：`npm i -S react-router-dom`

```js
// 官方提供了三个路由文件：
// 1 web（react-router-dom）：web应用中使用的路由
// 2 native（react-router-native）：在 react-native 中使用
// 3 react-router 路由的核心包，一般不会直接使用这个包

// 不管是 web/native ，都会依赖于：react-router
```

### 基本概念说明

- `Router`组件本身只是一个容器，真正的路由要通过`Route组件`定义
- ![react router](./images/ReactRouter.png)

### 使用步骤

- 1 导入路由组件
- 2 使用 `<Router></Router>` 作为根容器，包裹整个应用（JSX）
  - 在整个应用程序中，只需要使用一次
- 3 使用 `<Link to="/movie"></Link>` 作为链接地址，并指定`to`属性
- 4 使用 `<Route path="/" compoent={Movie}></Route>` 展示路由内容

```js
// 1 导入组件
import {
  HashRouter as Router,
  Link, Route
} from 'react-router-dom'

// 2 使用 <Router>
<Router>

  // 3 设置 Link
  <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
  <Menu.Item key="2"><Link to="/movie">电影</Link></Menu.Item>
  <Menu.Item key="3"><Link to="/about">关于</Link></Menu.Item>

  // 4 设置 Route
  // exact 表示：绝对匹配（完全匹配，只匹配：/）
  <Route exact path="/" component={HomeContainer}></Route>
  <Route path="/movie" component={MovieContainer}></Route>
  <Route path="/about" component={AboutContainer}></Route>

</Router>
```

### 注意点

- `<Router></Router>`：作为整个组件的根元素，是路由容器，只能有一个唯一的子元素
- `<Link></Link>`：类似于 vue 中的`<router-link></router-link>`标签，`to` 属性指定路由地址
- `<Route></Route>`：类似于 vue 中的`<router-view></router-view>`，指定路由内容（组件）展示位置

### 路由参数

- 配置：通过`Route`中的 path 属性来配置路由参数
- 获取：`this.props.match.params` 获取

```js
// 配置路由参数
;<Route path="/movie/:movieType" />

// 获取路由参数
const type = this.props.match.params.movieType
```

### 路由跳转

- [react router - history](https://reacttraining.com/react-router/web/api/history)
- `history.push()` 方法用于在 JS 中实现页面跳转
- `history.go(-1)` 用来实现页面的前进（1）和后退(-1)

```js
this.props.history.push('/movie/movieDetail/' + movieId)
```

### 路由高亮

- 如果需要让当前匹配的路由带有高亮效果，可以使用 `NavLink组件`

```js
// activeClassName 用来指定高亮类名名称

<NavLink exact to="/" activeClassName="itcast">
  首页
</NavLink>
<NavLink to="/movie" activeClassName="itcast">
  电影列表
</NavLink>
```

## fetch

- 作用：Fetch 是一个现代的概念, 等同于 XMLHttpRequest。它提供了许多与 XMLHttpRequest 相同的功能，但被设计成更具可扩展性和高效性。
- `fetch()` 方法返回一个`Promise`对象

### fetch 基本使用

- [fetch Response](https://developer.mozilla.org/zh-CN/docs/Web/API/Response)
- [fetch 介绍](http://www.jianshu.com/p/ccf99a12faf1)
- [Javascript 中的神器——Promise](http://www.jianshu.com/p/063f7e490e9a)
- [XHR Level 2.0](http://www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html)

```js
/*
  通过fetch请求回来的数据，是一个Promise对象.
  调用then()方法，通过参数response，获取到响应对象
  调用 response.json() 方法，解析服务器响应数据
  再次调用then()方法，通过参数data，就获取到数据了
*/
fetch('/api/movie/' + this.state.movieType)
  // response.json() 读取response对象，并返回一个被解析为JSON格式的promise对象
  .then(response => response.json())
  // 通过 data 获取到数据
  .then(data => {
    console.log(data)
    this.setState({
      movieList: data.subjects,
      loaing: false
    })
  })
```

## 跨域获取数据的三种常用方式

- 1 JSONP
- 2 代理
- 3 CORS

### JSONP

- 安装：`npm i -S fetch-jsonp`
- 利用`JSONP`实现跨域获取数据，只能获取 GET 请求
- `fetch-jsonp`
- [fetch-jsonp](https://github.com/camsong/fetch-jsonp)
- 限制：1 只能发送 GET 请求 2 需要服务端支持 JSONP 请求

```js
/* movielist.js */
fetchJsonp('https://api.douban.com/v2/movie/in_theaters')
  .then(rep => rep.json())
  .then(data => {
    console.log(data)
  })
```

### 代理

- `webpack-dev-server` 代理配置如下：
- 问题：webpack-dev-server 是开发期间使用的工具，项目上线了就不再使用 webpack-dev-server
- 解决：项目上线后的代码，也是会部署到一个服务器中，这个服务器配置了代理功能即可（要求两个服务器中配置的代理规则相同）

```js
// webpack-dev-server的配置
devServer: {
  // https://webpack.js.org/configuration/dev-server/#devserver-proxy
  // https://github.com/chimurai/http-proxy-middleware#http-proxy-options
  // http://www.jianshu.com/p/3bdff821f859
  proxy: {
    // 使用：/api/movie/in_theaters
    // 访问 ‘/api/movie/in_theaters’ ==> 'https://api.douban.com/v2/movie/in_theaters'
    '/api': {
      // 代理的目标服务器地址
      target: 'https://api.douban.com/v2',
      // https请求需要该设置
      secure: false,
      // 必须设置该项
      changeOrigin: true,
      // '/api/movie/in_theaters' 路径重写为：'/movie/in_theaters'
      pathRewrite: {"^/api" : ""}
    }
  }
}

/* movielist.js */
fetch('/api/movie/in_theaters')
  .then(function(data) {
    // 将服务器返回的数据转化为 json 格式
    return data.json()
  })
  .then(function(rep) {
    // 获取上面格式化后的数据
    console.log(rep)
  })
```

### CORS - 服务器端配合

- CORS 使用场景： 自己的项目，或者可以直接对服务端代码进行设置的
- 示例：NodeJS 设置跨域
- [跨域资源共享 CORS 详解 - 阮一峰](http://www.ruanyifeng.com/blog/2016/04/cors.html)

```js
// 通过Express的中间件来处理所有请求
app.use(function(req, res, next) {
  // 设置响应头为允许跨域
  res.header('Access-Control-Allow-Origin', '*')

  // 设置服务器支持的所有头信息字段
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization,Accept,X-Requested-With'
  )
  // 设置服务器支持的所有跨域请求的方法
  res.header('Access-Control-Allow-Methods', 'POST,GET')
  // next()方法表示进入下一个路由
  next()
})
```
