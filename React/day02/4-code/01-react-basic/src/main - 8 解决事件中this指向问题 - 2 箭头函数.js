/* 
  react 事件处理程序中 this 指向的问题：
    1 默认情况下，事件处理程序中的 this 是 undefined
    2 我们希望事件处理程序中的this指向当前组件的实例对象。
      render 方法中的this，就是当前组件的实例对象！！！

  两种处理this指向的方式：
    1 箭头函数
    2 bind() 方法改变this指向
*/

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Hello extends Component {
  state = {
    count: 0
  }

  // 注意：这种赋值的方式创建方法，不是标准的JS语法，需要 stage-2 处理后，才能使用
  handleClick = () => {
    this.setState({
      count: this.state.count + 2
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.handleClick}>点击按钮</button>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
