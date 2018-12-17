// 1 react 基本使用
//  安装：npm i -S react react-dom

// 2 导入
import React from 'react'
import ReactDOM from 'react-dom'

// 3 创建react元素
// const dv = React.createElement(标签名称, 属性集合, 子节点1, 子节点2，。。。 )

const num = 123

// JSX
// JavaScript XML：也就是在 JS 代码中直接写 HTML 结构
const dv = <div>react 元素 {1 + 2 + num}</div>

// JSX语法的转化过程：
// JSX -> React.createElement() -> react元素（虚拟DOM对象） -> HTML

// 组件：
//  1 函数组件(无状态组件)
//  2 class组件（有状态组件）

// props 是只读的

// state 状态：组件中的数据

// function Hello(props) {
//   console.log(props)
//   // return null
//   return <h1>这是 Hello 组件 - {props.name}</h1>
// }

class Hello extends React.Component {
  render() {
    return <h1>这是 Hello 组件 | {this.props.name}</h1>
  }
}

// ReactDOM.render(dv, document.getElementById('app'))
ReactDOM.render(<Hello name="rose" />, document.getElementById('app'))
