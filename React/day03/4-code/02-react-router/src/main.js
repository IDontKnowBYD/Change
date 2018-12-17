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
const About = () => <div>这是About组件</div>
const Stu = () => <div>这是Stu组件</div>

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/about">关于</Link>
            </li>
            <li>
              <Link to="/stu">学员管理</Link>
            </li>
          </ul>

          {/* 
            注意：默认情况下，path="/" 能够匹配任意的 to属性值（哈希值，只要包含 / 就能匹配成功）

            没有exact属性：模糊匹配，只要 to 中包含path就会匹配成功
            有exact属性：精确匹配，只有当 to 和 path 完全匹配时，才会匹配成功

            添加 exact 属性后，当前 path 的匹配规则就变为：精确匹配了，也就是说：只要当 path 与 to 完全匹配的时候，那么，当前 Route 才能匹配成功

            一般情况下，只要 path="/"，就要给当前 Route 添加 exact 属性
          */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/stu" component={Stu} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
