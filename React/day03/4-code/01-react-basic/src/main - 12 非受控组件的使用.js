/* 
  非受控组件：
    
  1 创建 ref 对象
  2 给文本框添加ref属性
  3 通过 this.txt.current.value 来获取到文本框的值
*/

import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  constructor(props) {
    super(props)

    // 创建ref
    this.txt = React.createRef()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('文本框的值为：', this.txt.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.txt} />
        <button onClick={this.handleClick}>获取到文本框的值</button>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
