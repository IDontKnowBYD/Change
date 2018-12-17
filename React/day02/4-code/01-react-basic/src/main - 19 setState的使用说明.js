/* 
  this.setState() 方法的说明：

    1 在react中必须要调用 setState 方法，才能修改状态
    2 setState的两个作用：
      2.1 修改state中的数据
      2.2 将state的改变，重新渲染在视图中
    
    3 注意： setState() 修改state是异步操作，也就是说：setState不会立即修改state中的数据，而是，延迟修改 state 中的数据。因此，无法直接在 setState() 后，获取到修改后的state值！！！

    4 说明：如果要获取到更新后的 state，可以通过传递回调函数来获取
*/

import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  state = {
    count: 0
  }

  changeState = () => {
    /* console.log(this.state.count)
    this.setState({
      count: this.state.count + 1
    })
    // 此时，获取到的state也是更新前的state
    console.log(this.state.count) */

    /* this.setState(
      {
        count: this.state.count + 1
      },
      function() {
        // 这个回调函数会在state更新后，执行。因此
        // 可以在这个回调函数中获取到最新的state
        console.log(this.state.count)
      }
    ) */

    // setState() 方法的另外一种使用方式：
    this.setState(function(prevState, props) {
      // 回调函数的参数：
      // 1 prevState 表示当前的状态
      // 2 props 表示当前的props

      // 返回的对象表示要更新的state
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>
          setState 方法的说明：
          {this.state.count}
        </h1>
        <button onClick={this.changeState}>修改state</button>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
