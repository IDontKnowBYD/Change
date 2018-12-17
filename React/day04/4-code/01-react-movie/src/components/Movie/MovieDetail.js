import React from 'react'

import { Alert, Spin, Layout, Row, Col, Button, Icon } from 'antd'

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      detail: {}, // 电影详情数据
      isLoading: true // 是否加载中
    }
  }

  componentDidMount() {
    // /v2/movie/subject/:id
    fetch(`/api/movie/subject/${this.props.match.params.movieId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)

        this.setState({
          detail: data,
          isLoading: false
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Spin tip="Loading...">
          <Alert
            message="友情提示"
            description="电影详情数据正在疯狂加载中，请稍候..."
            type="info"
          />
        </Spin>
      )
    }

    const { detail } = this.state

    return (
      <div>
        <Button
          type="primary"
          onClick={() => this.goBack()}
          style={{ width: 160 }}
        >
          <Icon type="left" />
          返回电影列表
        </Button>
        <h1 style={{ textAlign: 'center' }}>{detail.title}</h1>
        <img
          src={detail.images.large}
          alt={detail.title}
          style={{ display: 'block', width: 270, margin: '0 auto' }}
        />
        <h3>主要演员：</h3>
        <Row>
          <Col span={12}>
            <ul
              style={{
                display: 'flex',
                listStyle: 'none',
                justifyContent: 'space-between'
              }}
            >
              {detail.casts.map(item => (
                <li key={item.id}>
                  <img src={item.avatars.small} alt="" style={{ width: 100 }} />
                  <p style={{ textAlign: 'center' }}>{item.name}</p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <h3>剧情介绍：</h3>
        <p style={{ textIndent: '2em' }}>{detail.summary}</p>
      </div>
    )
  }

  goBack() {
    this.props.history.go(-1)
  }
}
