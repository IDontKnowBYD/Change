/* 
  class 组件中的状态
*/
import React from 'react'
import ReactDOM from 'react-dom'

// 创建 class组件
class Hello extends React.Component {
  // 在 react 中，在类的构造函数中来初始化状态（state）
  constructor() {
    super()

    // 1 state 是组件内部的私有数据，只能在当前组件中使用
    // 2 state 应该在 构造函数中通过 this.sate = {} 来初始化
    // 3 只能通过 this.setState() 方法来修改状态，而不能直接 this.state.msg = '66' 方式来修改state！！！
    // 4 只有class组件才有state（状态）

    // 初始化 state
    this.state = {
      msg: 'Hello state'
    }
  }

  // 钩子函数：
  componentDidMount() {

    // 通过 setState() 方法来修改状态
    this.setState({
      msg: '修改了state的数据'
    })
  }

  render() {
    
    return (
      <div>
        <h1>这是 Hello class组件, 这是传递给组件的数据: { this.props.name }</h1>
        <p>{ this.state.msg }</p>
      </div>
    )
  }
}

// 渲染class组件
ReactDOM.render(
  <Hello name="小明" age={18} color={ ['a', 'b'] } />,
  document.getElementById('app')
)
