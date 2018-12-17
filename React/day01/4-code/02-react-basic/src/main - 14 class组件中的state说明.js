/* 
  class 组件中的状态（state）说明

  1 在 constuctor 中，通过给 this 添加state属性来初始化state
  2 使用 state 中的数据，直接通过 this.state.num
  3 可以通过 this.setState() 来修改state中的数据

  state的特点：
    1 state是组件中的私有数据，只能在当前组件中使用
    2 state是可以修改的，但是，不要直接 this.state.num = 999 方式来修改state!!!
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 创建class组件
class Hello extends React.Component {
  constructor() {
    super()

    // 初始化state
    this.state = {
      num: 6,
      gender: 'male'
    }
  }

  // 组件生命周期钩子函数
  componentDidMount() {
    // 在这修改 state 中的数据
    setTimeout(() => {
      this.setState({
        num: 999
      })

      // 不要使用这种方式修改数据，修改无效！！！
      // this.state.num = 888
    }, 3000)
  }

  render() {
    return (
      <div>
        这是 Hello 组件，使用状态：
        {this.state.num}
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
