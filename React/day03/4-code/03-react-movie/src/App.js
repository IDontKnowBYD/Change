/* 
  项目的根组件
*/

// 导入react
import React from 'react'
// 导入路由
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// 导入antd组件
import { Layout, Menu } from 'antd'
// 导入样式
import './css/index.css'

// 导入三个组件
import Home from './components/Home'
import About from './components/About'
import Movie from './components/Movie'

const { Header, Content, Footer } = Layout

// 创建根组件
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/">首页</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/movie">电影列表</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/about">关于</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content className="movie-content">
            <div
              style={{
                background: '#fff',
                minHeight: 280,
                height: '100%'
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
