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
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    console.log('constructor', this)

    // 通过bind修改事件中this的指向
    // 等号 右侧的 handleClick 是我们自己创建的 handleClick 方法
    // 等号 左侧的 handleClick 是由 bind 方法返回的新方法，这个新方法中 this 已经与 constuctor 中的this绑定到一起了。这个 this 就是我们需要的组件实例
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.handleClick}>点击按钮</button>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
