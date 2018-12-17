import React from 'react'

import { Card, Rate } from 'antd'

import './movie.css'

// 导入 fetch-jsonp
import fetchJsonp from 'fetch-jsonp'

export default class MovieList extends React.Component {
  componentDidMount() {
    // fetch API 的基本使用：
    // fetch('http://localhost:3002/news')
    //   .then(res => {
    //     // 因为fetch可以请求任意的资源，所以，需要在客户端
    //     // 先对其进行一次格式化的转换(比如: res.json() 就是将返回的内容转化为json格式的数据, 还可以调用 res.blob() 用来解析二进制对象图片文件 等)
    //     return res.json()
    //   })
    //   // 在这个 then 方法中, 才可以获取到真正的数据内容
    //   .then(res => {
    //     console.log('接口返回的数据：', res)
    //   })
    //
    // 演示 fetch 请求图片文件:
    // const img = document.createElement('img')
    // // fetch('https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png')
    //
    // 如果通过fetch请求本地的图片资源,需要从根目录开始查找文件路径
    // fetch('/src/imgs/logo.png')
    //   .then(res => {
    //     return res.blob()
    //   })
    //   .then(res => {
    //     const objectURL = URL.createObjectURL(res)
    //     img.src = objectURL
    //     document.body.appendChild(img)
    //   })
    // 可以通过这个接口获取到豆瓣电影的数据信息,但是,
    // 直接请求这些数据会涉及到了 跨域的问题
    // 所以, 要想请求拿到这些电影数据, 需要先解决跨域的问题
    // fetch('https://api.douban.com/v2/movie/in_theaters')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log('豆瓣电影数据:', res)
    //   })
    //
    //
    // 解决跨域问题：
    // 1 JSONP
    //  1.1 需要服务端配合，服务器需要返回 jsonp 格式的数据，前端才能使用jsonp获取这些数据
    //  1.2 只能发送GET请求，无法使用其他的请求方式
    //  使用 fetch-jsonp 包来发送JSONP请求
    //  1 安装：npm i -S fetch-jsonp
    //  2 导入
    //  3 使用
    // fetchJsonp('https://api.douban.com/v2/movie/in_theaters', {
    //   // 可以通过 jsonpCallback 来修改 参数名称，默认值为：callback
    //   // jsonpCallback: 'custom_callback'
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log('JSONP 获取数据：', res)
    //   })
    //
    // 2 CORS 跨域资源共享
    //
    // 3 反向代理
    //  我们通过 webpack-dev-server 这个服务器来配置一个反向代理
    //  由它来代理我们的浏览器发送请求，获取数据

    fetch('/api/movie/in_theaters')
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <div>
        <div>
          <Card
            className="movie-item"
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <h3>第大雾</h3>
            <p>电影类型：喜剧、动作片</p>
            <p>上映年份：2018</p>
            <Rate disabled defaultValue={2} />
          </Card>
        </div>
        <div>分页</div>
      </div>
    )
  }
}
