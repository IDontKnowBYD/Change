/* 
  react 中的事件绑定 和 this 指向：

  绑定事件的语法：
    onClick={() => console.log('单击事件触发了')}
    onMouseEnter={() => console.log('鼠标移入')}
    on + 事件名称（每个单词的首字母大写）={ 事件处理程序 }

  绑定事件的时候，推荐将事件处理程序做一个单独的方法，在事件中通过引用指定事件处理程序即可
    <button onClick={this.handleClick}>点击事件</button>
    handleClick() {
      console.log('单击事件触发了')
    }
*/

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Hello extends Component {
  // 单击事件的事件处理程序
  handleClick() {
    console.log('单击事件触发了')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点击事件</button>

        {/* <button
          onClick={() => console.log('单击事件触发了')}
          onMouseEnter={() => console.log('鼠标移入')}
        >
          点击事件
        </button> */}
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
