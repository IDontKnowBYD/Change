/* 
  1 state中应该只存放页面渲染用到的数据，而其他需要在多个方法之间公用的数据
    直接添加给 this 即可

    也可以直接通过 ref 的方式来操作form表单元素，而不通过受控组件
    因为 受控组件 需要在 state 中添加额外的数据， 而 ref 就不需要了
    这样 state 中的数据就会变得更加简洁
  
  2 react路由菜单高亮
      <NavLink></NavLink> 组件创建的 导航菜单，会在该路由匹配时，为该组件添加 active 高亮类名
      可以通过 activeClassName 属性，修改默认高亮的类名
  
  3 react路由的 withRouter 方法
    语法：const 新组件 = withRouter( 原始组件 )
    作用：让组件直接通过 props 来获取到路由中的信息（location/history/match）
    使用场景：在一个不是通过路由展示出来的组件中，获取路由中的信息
    默认情况，通过路由展示出来的组件，直接可以通过 props 获取到跟路由相关的信息
  
  4 fetch API
    用来替代 ajax 的一种现代请求方式
    fetch(url).then(res => res.json()).then(res => 获取到服务器返回的json格式数据)
    参考：https://www.cnblogs.com/snandy/p/5076512.html
    兼容方案：https://github.com/github/fetch

  5 解决跨域：
    5.1 JSONP     fetch-jsonp
    5.2 CORS      跨域资源共享
    5.3 反向代理   webpack-dev-server 服务器中提供的 proxy 配置项

  6
*/

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById('app'))
