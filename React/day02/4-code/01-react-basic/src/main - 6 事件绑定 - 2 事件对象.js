/* 
  react 事件处理程序中的事件对象：
    1 react中的事件对象是 react 自己封装的，而不是原始的DOM事件对象
    2 最常用的场景：
      2.1 阻止浏览器的默认行为 e.preventDefault()
      2.2 获取文本文本框值：e.target.value
*/

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Hello extends Component {
  // 单击事件的事件处理程序
  handleClick(e) {
    // 通过事件对象来阻止浏览器的默认行为
    e.preventDefault()
    console.log('单击事件触发了', e)
  }

  render() {
    return (
      <div>
        <a href="http://itcast.cn" onClick={this.handleClick}>
          传智
        </a>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
