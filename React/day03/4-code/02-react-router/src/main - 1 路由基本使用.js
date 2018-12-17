/* 
  react 的路由：
    路由是 SPA 的必备条件

  react 路由的使用说明：
  1 安装：npm i -S react-router-dom
  2 导入组件
  3 使用路由


  react 路由中的三个核心内容：
  1 Router组件： 
    1.1 用来包裹整个应用，只有被 Router 包裹的内容，才能实现路由导航的功能
    1.2 Router组件 只使用一次
    1.3 Router组件只能有一个 根节点

  2 Route组件：
    2.1 每个路由规则对应一个 Route组件
    2.2 通过 path 属性配置路由规则
    2.3 通过 component 属性表示：该路由规则匹配时要展示的组件
    2.4 Route组件写在哪，将来的内容，就展示在哪个地方（作为出口）

  3 Link组件：
    3.1 导航菜单
    3.2 最终会被渲染为 a标签
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 导入路由
import { HashRouter as Router, Route, Link } from 'react-router-dom'

// 创建组件
const Home = () => <div>这是Home组件</div>

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">首页</Link>
            </li>
          </ul>

          <Route path="/home" component={Home} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
