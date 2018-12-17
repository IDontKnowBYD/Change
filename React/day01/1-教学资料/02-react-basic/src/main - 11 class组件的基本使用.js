/* 
  react 组件化开发：

  要解决的问题：react 如何创建组件？
  两种创建组件的方式：
  1 函数式组件
  2 class组件

  class 组件
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 创建 class组件
// 注意点:
//  1 使用类组件必须提供一个 render 方法
//  2 render方法中必须有返回值,要么返回 null 要么返回 JSX
//  3 在class组件中, 通过 this.props 来获取到传递给组件的数据
//  4 注意: props 是固定的属性名称, 不能随意修改!!!
//  5 注意: this.props 也是只读的属性!!!
class Hello extends React.Component {
  render() {
    console.log(this.props)

    // this.props.name = 'rose'
    // this.props.age = 19

    // return null
    return (
      <div>
        <h1>这是 Hello class组件, 这是传递给组件的数据: { this.props.name }</h1>
      </div>
    )
  }
}

// 渲染class组件
ReactDOM.render(
  <Hello name="小明" age={18} color={ ['a', 'b'] } />,
  document.getElementById('app')
)
