import React from 'react'

import { Link, Route } from 'react-router-dom'

import { Layout, Menu } from 'antd'

// 导入电影类表组件
import MovieList from './MovieList'

const { Sider, Content } = Layout

export default class Movie extends React.Component {
  constructor(props) {
    super(props)

    console.log(props)
  }
  render() {
    return (
      <Layout style={{ paddingTop: 30, backgroundColor: '#fff' }}>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1">
              <Link to="/movie/in_theaters">正在热映</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/movie/coming_soon">即将上映</Link>
            </Menu.Item>
            <Menu.Item key="3">
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
            {/* 
            因为这三个组件结构都是相同的，因此，只要提供一个组件即可

            既然只有一个组件，Route只需要使用一次即可，所以， path 需要匹配这三个哈希值才可以。因此，需要使用路由参数

            /movie/:movieType 这个带有路由参数的路由能够匹配什么样的哈希值：
              /movie/in_theaters
              /movie/coming_soon
              /movie/top250
              /movie

              不能匹配： /abc 或 /movie/in_theaters/12
          */}
            <Route path="/movie/:movieType" component={MovieList} />
            {/* <Route path="/movie/in_theaters" component={MovieList} />
            <Route path="/movie/coming_soon" component={MovieList} />
            <Route path="/movie/top250" component={MovieList} /> */}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
