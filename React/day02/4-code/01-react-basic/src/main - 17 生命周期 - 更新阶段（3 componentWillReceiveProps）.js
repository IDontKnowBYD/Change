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
        <Child count={this.state.count} />
        <button onClick={this.beatDoudou}>打豆豆</button>
      </div>
    )
  }
}

class Child extends React.Component {
  state = {
    test: 'aaa'
  }

  // 说明：组件接受到新的props，就会调用这个钩子函数
  // componentWillReceiveProps() {
  //   console.warn('--------子组件生命周期钩子函数： componentWillReciveProps')
  // }

  // 组件实例化后和接受新属性时将会调用
  // 该钩子函数应该返回一个对象来更新状态，或者返回null来表明新属性不需要更新任何状态。
  static getDerivedStateFromProps(nextProps, prevState) {
    console.warn(
      '--------子组件生命周期钩子函数： getDerivedStateFromProps',
      nextProps,
      prevState
    )
    // return null
    return {
      test: 'bbb'
    }
  }

  render() {
    console.warn('--------子组件生命周期钩子函数： render')
    return (
      <h1 id="title">
        统计豆豆被打的次数：
        {this.props.count} -- {this.state.test}
      </h1>
    )
  }
}

ReactDOM.render(<Dadoudou />, document.getElementById('app'))
