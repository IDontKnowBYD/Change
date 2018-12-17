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
  constructor(props) {
    super(props)

    this.state = {
      curMenuKey: location.hash
    }

    window.addEventListener('hashchange', () => {
      this.setState({
        curMenuKey: location.hash
      })
    })
  }

  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            {/* 
              defaultSelectedKeys 默认选中菜单的keys数组，只会在第一次渲染组件时生效
              如果要动态设置菜单选中项，应该通过 selectedKeys 属性来控制
            */}
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[this.state.curMenuKey]}
              selectedKeys={[this.state.curMenuKey]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="#/">
                <Link to="/">首页</Link>
              </Menu.Item>
              <Menu.Item key="#/movie">
                <Link to="/movie">电影列表</Link>
              </Menu.Item>
              <Menu.Item key="#/about">
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
