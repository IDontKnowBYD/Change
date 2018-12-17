/* 
  给 class 组件传递数据：

    第一步：在组件标签中添加属性
      <Hello name="tom" /> 表示：给Hello组件，传递name属性
    第二步：在 class 中的方法内部，通过 this.props 来获取到传递过来的数据
      this.props
    
    class组件中的 props 与 函数组件中的 props 特点完全相同！！！
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 创建class组件
class Hello extends React.Component {
  render() {
    console.log(this.props)
    // return null
    return (
      <h1>
        这是 class 组件，你好：
        {this.props.name}
      </h1>
    )
  }
}

// 渲染class组件
ReactDOM.render(<Hello name="tom" age={18} />, document.getElementById('app'))
