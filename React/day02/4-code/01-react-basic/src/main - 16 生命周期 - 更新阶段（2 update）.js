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
  }

  // 注意：这个钩子函数必须返回一个布尔值（true 或 false）
  // 如果返回true，表示更新页面中的内容
  // 如果返回false，表示不更新页面中的内容
  // 作用：能够实现条件更新，只有当数据满足我们指定的条件时才更新组件。可以达到提升组件渲染性能的目的
  // 比如：豆豆被打的次数为奇数次才更新组件，偶数次不更新组件
  // 注意：在该钩子函数中通过 this.state 获取到的状态为更新前的状态，不是最新的state数据！！！
  //  我们可以通过形参，来获取到最新的 props 和 state
  shouldComponentUpdate(nextProps, nextState) {
    console.warn('生命周期钩子函数： shouldComponentUpdate', nextState.count)

    return true
  }

  componentWillUpdate() {
    console.warn(
      '生命周期钩子函数： componentWillUpdate',
      document.getElementById('title').innerHTML
    )
  }
  componentDidUpdate() {
    console.warn(
      '生命周期钩子函数： componentDidUpdate',
      document.getElementById('title').innerHTML
    )
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
