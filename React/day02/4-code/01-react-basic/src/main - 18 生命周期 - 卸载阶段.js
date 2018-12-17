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
        {/* 
          react 中组件更新的说明：

          在 react 中，父组件可以通过 props 将父组件中state传递给子组件
          并且，当父组件中的state发生改变的时候，这个变化会自动的再传递到子组件中
          子组件接受到这个新的数据，并且会自动更新子组件
        */}
        {this.state.count <= 3 ? (
          <Child count={this.state.count} />
        ) : (
          '豆豆被打死了~'
        )}
        <button onClick={this.beatDoudou}>打豆豆</button>
      </div>
    )
  }
}

class Child extends React.Component {
  // 当组件不再展示在页面中，那么，这个钩子函数就会触发
  // 就说明：组件被从页面中卸载掉了
  // 作用：执行清理工作
  componentWillUnmount() {
    console.warn('--------子组件生命周期钩子函数： componentWillUnmount')

    clearInterval(this.timerId)
  }

  componentDidMount() {
    this.timerId = setInterval(() => console.log('子组件定时器'), 1000)
  }

  render() {
    console.warn('--------子组件生命周期钩子函数： render')
    return (
      <h1 id="title">
        统计豆豆被打的次数：
        {this.props.count}
      </h1>
    )
  }
}

ReactDOM.render(<Dadoudou />, document.getElementById('app'))
