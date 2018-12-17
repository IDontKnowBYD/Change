/* 
  项目的根组件

  react-router-dom 路由组件的说明：

  1 如果组件是通过 react 路由展示出来的，那么，这个组件就可以通过 props 属性
    获取到跟当前路由相关的属性（histroy/location/match）
    但是，组件不是通过路由展示出来的，那么，这个组件是无法获取到路由相关属性的

  2 withRouter方法：用来包裹这个组件（这个组件一般都不是通过路由展示出来的组件）
    让这个组件能够获取到 路由 中提供的数据
    使用场景：想获取到路由相关的属性，但是，这个组件又不是通过路由展示出来
*/

// 导入react
import React from 'react'
// 导入路由
// import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom'

// 去掉#，使用 HTML5 中提供的 history API 来实现路由控制
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'
// 导入antd组件
import { Layout, Menu } from 'antd'
// 导入样式
import './css/index.css'

// 导入三个组件
import Home from './components/Home'
import About from './components/About'
import Movie from './components/Movie'

const { Header, Content, Footer } = Layout

// menu 组件
// https://github.com/ant-design/ant-design/issues/6576#issuecomment-398355506
const MovieMenus = props => {
  // console.log('Menus：', props.location.pathname)
  const { location } = props

  let key = location.pathname

  // 判断如果电影列表的子菜单，就让 key 为 /movie ，这样不管哪个子菜单
  // 都可以让电影列表菜单高亮了
  if (key.startsWith('/movie')) {
    key = '/movie'
  }

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[key]}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/">
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="/movie">
        <Link to="/movie/in_theaters">电影列表</Link>
      </Menu.Item>
      <Menu.Item key="/about">
        <Link to="/about">关于</Link>
      </Menu.Item>
    </Menu>
  )
}

// withRouter 参数：是一个组件
//            返回值：一个新的组件
const MovieMenusWithRouter = withRouter(MovieMenus)

// 创建根组件
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <MovieMenusWithRouter />
          </Header>
          <Content style={{ overflowY: 'auto' }}>
            <div
              style={{
                background: '#fff',
                minHeight: 280
              }}
            >
              <Route exact path="/" component={Home} />
              <Route path="/movie" component={Movie} />
              <Route path="/about" component={About} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            黑马程序员 ©2018 Created by 传智播客
          </Footer>
        </Layout>
      </Router>
    )
  }
}
