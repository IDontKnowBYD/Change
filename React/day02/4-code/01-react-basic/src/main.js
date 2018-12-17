/* 
  react 中的受控组件：

    原则：react中的数据是由 state 提供的，并且只能通过 setState() 方法来修改state

  受控组件：其值由React控制的表单元素称为“受控组件”
    也就是说：表单元素的值是由state提供的

  执行过程：
    1 给文本框添加了一个 value 属性，值为：state中的数据
        因为react中的state只能由setState来修改，因此，现在无法直接修改文本框的值
    2 给文本框绑定了 onChange 事件，当修改文本框内容的时候，就会触发这个事件
    3 在事件处理程序中，通过事件对象 e.target.value 获取到了当前文本框的最新值
    4 调用 setState() 方法，来根据文本框的最新值，更新 state 中的数据
    5 因为调用了 setState() 方法，所以，页面中文本框的值就被重新渲染出来了
*/

import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      txt: '默认值'
    }

    this.getTxt = this.getTxt.bind(this)
  }

  getTxt(e) {
    // console.log('文本框的输入事件触发了', e.target.value)
    this.setState({
      txt: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.txt} onChange={this.getTxt} />
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
