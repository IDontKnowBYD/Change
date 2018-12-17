/* 
  react 组件化开发：

  要解决的问题：react 如何创建组件？
  两种创建组件的方式：
  1 函数式组件
  2 class组件

  函数式组件，又叫：无状态组件  --- 木偶组件
  class组件，又叫：有状态组件  --- 智能组件
  两种组件的区别：有没有状态（state）

  react中什么是状态？？？ 状态即数据
  所有，两者的区别在于：组件有没有自己的私有数据（状态），如果有私有的数据（状态）就是 class组件（有状态组件）；如果没有私有数据（状态）就是函数组件（无状态组件）

  对于有状态的组件（class组件），可以通过事件等操作来修改数据，与用户实现响应的交互
    比如：用户点击按钮，可以看到页面中数据的变化
  但是，对于无状态组件（函数组件）来说，功能单一：只能用来展示数据！！！

  问题：什么时候应该使用 有状态组件？什么使用应该使用 无状态组件？？？
  如果是有交互（比如：单击事件）或者需要动态修改页面内容的都应该通过 有状态组件来实现
  如果仅仅是为了展示一段结构，此时，应该使用无状态组件
  
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
