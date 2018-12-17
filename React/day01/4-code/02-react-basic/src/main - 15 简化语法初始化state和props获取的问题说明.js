/* 
  1 如果要在 class 组件中的 constructor 中获取到 props ，需要给 constructor 
  和 super传递 props 参数，才能获取到！！！

  2 可以在class中直接通过 state = {} 的方式来初始化state
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 创建class组件
class Hello extends React.Component {
  /* constructor(props) {
    super(props)

    // 初始化state
    this.state = {
      num: 6,
      gender: 'male'
    }

    // 获取props
    // console.log('constructor：', this.props, props)
  } */

  // 可以直接通过简化语法来初始化state
  state = {
    num: 666,
    gender: 'male'
  }

  render() {
    console.log('render: ', this.props)
    return (
      <div>
        这是 Hello 组件，使用状态：
        {this.state.num}
      </div>
    )
  }
}

ReactDOM.render(<Hello name="rose" />, document.getElementById('app'))
