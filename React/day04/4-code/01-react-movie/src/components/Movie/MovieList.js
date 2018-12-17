import React from 'react'

import { Card, Rate, Spin, Alert, Pagination } from 'antd'

import './movie.css'

export default class MovieList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // 电影数据
      movieData: {},
      // 数据是否加载中
      isLoading: true
    }
    const { page, movieType } = props.match.params
    // console.log('电影列表：', props)

    // 每页大小
    this.pageSize = 6
    // 当前页数据
    this.curPage = page - 0 || 1
    // 电影类型
    this.movieType = movieType

    this.changeCurPage = this.changeCurPage.bind(this)
  }

  // componentDidMount() {
  //   console.log('componentDidMount')
  //   this.fetchMovieData()
  // }

  // 这个钩子函数，在 进入页面 或者 切换页码 的时候，都会执行
  componentWillReceiveProps(nextProps, nextState) {
    // console.log('componentWillReceiveProps: ', nextProps, nextState)
    // 开启加载中效果
    this.setState({
      isLoading: true
    })

    const { page, movieType } = nextProps.match.params
    // 修改当前页
    this.curPage = page - 0 || 1
    // 重新获取当前点击的电影类型
    this.movieType = movieType

    // 获取数据
    this.fetchMovieData()
  }

  // 获取电影列表数据
  fetchMovieData() {
    // 第一页： 0 1 2 3 4 5
    // 第二页： 6 7 8 9 10 11
    // 第三页： 12 13 14 15 16 17
    // 第四页： 18 。。。
    // start = (curPage - 1) * pageSize
    // console.log('当前页：', this.curPage)
    const start = (this.curPage - 1) * this.pageSize

    fetch(`/api/movie/${this.movieType}?start=${start}&count=${this.pageSize}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movieData: res,
          // 表示数据加载完毕
          isLoading: false
        })
      })
  }

  // 渲染电影列表的方法
  renderMovieList() {
    const { subjects } = this.state.movieData

    return subjects.map(item => (
      <Card
        key={item.id}
        className="movie-item"
        hoverable
        cover={<img alt={item.title} src={item.images.small} />}
        onClick={() => this.goDetail(item.id)}
      >
        <h3>{item.title}</h3>
        <p>
          电影类型：
          {item.genres.join(',')}
        </p>
        <p>
          上映年份：
          {item.year}
        </p>
        <Rate disabled defaultValue={item.rating.average / 2} />
      </Card>
    ))
  }

  // 跳转到详情页
  goDetail(id) {
    this.props.history.push(`/movie/detail/${id}`)
  }

  /**
   * 页面切换的事件
   * @param {number} page 当前页
   * @param {number} pageSize 每页大小
   */
  changeCurPage(page, pageSize) {
    // console.log(page, pageSize)
    // 通过编程式导航来修改路由
    const { history } = this.props
    history.push(`/movie/${this.movieType}/${page}`)
  }

  render() {
    const { isLoading, movieData } = this.state

    // 数据加载中
    if (isLoading) {
      return (
        <Spin tip="加载中...">
          <Alert
            message="温馨提示"
            description="电影数据正在疯狂的加载中，请稍候..."
            type="info"
          />
        </Spin>
      )
    }

    return (
      <div>
        <div className="movie-list">{this.renderMovieList()}</div>
        <div>
          {/* 
            total 总条数
            defaultCurrent 默认当前页
            defaultPageSize 每页大小
          */}
          <Pagination
            defaultPageSize={this.pageSize}
            defaultCurrent={this.curPage}
            total={movieData.total}
            onChange={this.changeCurPage}
          />
        </div>
      </div>
    )
  }
}
