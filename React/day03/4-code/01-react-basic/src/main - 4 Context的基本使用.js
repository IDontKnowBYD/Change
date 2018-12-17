/* 
  Context的使用说明：

*/

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 1 创建 context 对象
// createContext() 方法的返回值是一个对象
// 对象中提供了两个组件：Provider 和 Consumer
// Provder 提供者
// Consumer 消费者
const { Provider, Consumer } = React.createContext()

class Parent extends Component {
  state = {
    color: 'red'
  }

  changeValue = () => {
    this.setState({
      color: 'green'
    })
  }

  render() {
    return (
      // 2 使用 Provider组件 包裹最外层的父组件
      //  value 属性的值表示要传递给子组件的数据
      // <Provider value="red">
      <Provider value={this.state.color}>
        <div style={{ backgroundColor: 'skyblue', padding: 20 }}>
          <h1>父组件：</h1>
          <button onClick={this.changeValue}>切换颜色</button>
          <Middle />
        </div>
      </Provider>
    )
  }
}

class Middle extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'pink', padding: 10 }}>
        <p>中间组件：</p>
        <Child />
      </div>
    )
  }
}

class Child extends Component {
  render() {
    return (
      // 3 使用 Consumer 组件包裹要使用父组件数据的内容，它的子节点是一个 回调函数
      //   通过回调函数的参数，可以获取到 Providor 提供的数据
      //   回调函数的返回值，表示要渲染的子组件的内容
      <Consumer>
        {value => (
          <div style={{ backgroundColor: '#def' }}>
            <p style={{ color: value }}>
              子组件，接收到父级传递过来的数据：
              {value}
            </p>
          </div>
        )}
      </Consumer>
    )
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'))
