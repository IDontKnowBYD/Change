/* 
  ref 和 非受控组件

  ref 的使用场景： DOM操作

  语法的说明：
    1 旧版本的语法：
      1.1 <input ref={input => this._input = input} />
      1.2 通过 this._input 就可以获取到当前DOM对象了
    
    2 最新的语法：
      2.1 this._input = React.createRef()
      2.2 <input ref={this._input} />
      2.3 通过 this._input.current 就可以获取到当前DOM对象了

  ref 的使用：
  1 创建ref对象
  2 在要进行DOM操作的元素中，添加 ref 属性
  3 通过 ref对象.current 来获取到当前DOM对象，就可以进行DOM操作了
*/

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Hello extends Component {
  constructor(props) {
    super(props)

    // 创建ref对象
    this.txt = React.createRef()

    // 注意：在 构造函数 中否获取到DOM对象，因为，组件中的内容还没有渲染到页面中
    // console.log('constructor', this.txt.current)
  }

  // 应该在该钩子函数中进行DOM操作
  componentDidMount() {
    // console.log(this.txt.current)
    this.txt.current.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.txt} />
        <button>按钮</button>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
