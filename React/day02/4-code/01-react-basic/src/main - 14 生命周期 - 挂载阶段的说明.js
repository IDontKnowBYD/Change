/* 
  react 组件生命周期钩子函数

  注意：只有class组件才有生命周期，函数组件没有生命周期
  
  整个生命周期分为三个阶段：
    1 挂载阶段（Mounting）   ：在进入页面（或组件渲染）
    2 更新阶段（Updating）   ：组件中的state发生改变 或者 组件接收到新的props
    3 卸载阶段（Unmounting） ：组件从页面中消失掉，不再展示在页面中了
*/

import React from 'react'
import ReactDOM from 'react-dom'

class Dadoudou extends React.Component {
  // 作用： 初始化state ，以及其他的一些初始化工作都可以在此完成
  constructor(props) {
    super(props)

    // 初始化state
    this.state = {
      count: 0
    }

    this.beatDoudou = this.beatDoudou.bind(this)

    console.warn('生命周期钩子函数： constructor')
  }

  // 说明：组件将要渲染（挂载），但是，还没有渲染
  // 因为这个钩子函数执行的时候，组件还没有渲染，所以，直接获取
  // 组件中的DOM元素，是无法获取到的！！！
  // 注意：这个钩子函数将在 v17.0 版本中被移除，所以，不要再使用这个钩子函数
  componentWillMount() {
    const h1 = document.getElementById('title')
    console.warn('生命周期钩子函数： componentWillMount', h1) // null

    // 演示同步修改state
    // this.setState({
    //   count: 9
    // })

    // 演示异步修改state
    // setTimeout(() => {
    //   this.setState({
    //     count: 9
    //   })
    // }, 2000)
  }

  // 说明：组件已经完成渲染（挂载）
  // 因为这个钩子函数执行的时候，组件已经完成渲染，所以，直接获取
  // 组件中的DOM元素，就可以获取到了
  // 作用：1 操作DOM 2 发送ajax请求
  componentDidMount() {
    const h1 = document.getElementById('title')
    console.warn('生命周期钩子函数： componentDidMount', h1)

    // 演示同步修改state
    // this.setState({
    //   count: 9
    // })

    // 演示异步修改state
    setTimeout(() => {
      this.setState({
        count: 9
      })
    }, 2000)
  }

  // 打豆豆的方法
  beatDoudou() {
    this.setState({
      count: this.state.count + 1
    })
  }

  // 作用：将 JSX 渲染在浏览器中
  render() {
    console.warn('生命周期钩子函数： render')
    return (
      <div>
        <h1 id="title">
          统计豆豆被打的次数：
          {this.state.count}
        </h1>
        <button onClick={this.beatDoudou}>打豆豆</button>
      </div>
    )
  }
}

ReactDOM.render(<Dadoudou />, document.getElementById('app'))
