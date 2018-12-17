/* 
  react 中采用了 合成事件
*/

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Parent extends Component {
  handleClick(e) {
    // 默认情况下，是无法直接查看 合成事件 中的属性的
    // 如果要查看这些属性的值，应该主动调用 persist() 方法，表示：坚持要看合成事件中的内容
    e.persist()
    console.log('事件对象：', e)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'))
