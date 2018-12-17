/* 
  非受控组件：
    
  1 如果要使用非受控组件的方式，而又想从state中设置默认值，此时，应该使用 defaultValue 属性，而不是 value 属性
*/

import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      txtName: 'jack'
    }

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
        <input type="text" ref={this.txt} defaultValue={this.state.txtName} />
        <button onClick={this.handleClick}>获取到文本框的值</button>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
