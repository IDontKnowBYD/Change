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

  handleClick() {
    console.log('事件中this指向：', this)

    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log('render方法中的this：', this)

    return (
      <div>
        <h1>{this.state.count}</h1>

        <button
          onClick={() => {
            // console.log('箭头函数中的this：', this)
            this.handleClick()
          }}
        >
          点击按钮
        </button>

        {/* 可以直接给事件绑定一个箭头函数，然后，把代码逻辑放在 JSX 结构中 */}
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          点击按钮
        </button> */}

        {/* 演示箭头函数中获取到的this为当前组件实例对象 */}
        {/* <button onClick={() => console.log(this)}>点击按钮</button> */}
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
