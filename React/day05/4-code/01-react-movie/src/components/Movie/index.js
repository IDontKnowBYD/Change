import React from 'react'

import { Link, Route, Switch } from 'react-router-dom'

import { Layout, Menu } from 'antd'

// 导入电影类表组件
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'

const { Sider, Content } = Layout

export default class Movie extends React.Component {
  render() {
    const { location } = this.props

    let key = location.pathname
    // 不需要处理： /movie/top250
    // 处理： /movie/top250/3

    if (key.startsWith('/movie/in_theaters')) {
      key = '/movie/in_theaters'
    } else if (key.startsWith('/movie/coming_soon')) {
      key = '/movie/coming_soon'
    } else {
      key = '/movie/top250'
    }

    return (
      <Layout style={{ paddingTop: 30, backgroundColor: '#fff' }}>
        <Sider width={200}>
          <Menu
            mode="inline"
            selectedKeys={[key]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="/movie/in_theaters">
              <Link to="/movie/in_theaters">正在热映</Link>
            </Menu.Item>
            <Menu.Item key="/movie/coming_soon">
              <Link to="/movie/coming_soon">即将上映</Link>
            </Menu.Item>
            <Menu.Item key="/movie/top250">
              <Link to="/movie/top250">Top250</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout style={{ borderLeft: '1px solid #ccc' }}>
          <Content
            style={{
              background: '#fff',
              padding: '0 24px',
              margin: 0,
              minHeight: 280
            }}
          >
            <Switch>
              <Route path="/movie/detail/:movieId" component={MovieDetail} />
              <Route path="/movie/:movieType/:page?" component={MovieList} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
