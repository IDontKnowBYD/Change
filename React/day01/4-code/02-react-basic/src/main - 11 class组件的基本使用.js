/* 
  react 中的class组件：
  
    1 class组件继承自 React.Component
    2 注意：class 组件中必须提供一个 render 方法
    3 注意：render方法必须有返回值，可以返回null或者返回JSX结构
           这一点跟函数中的返回值相同
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 创建class组件
class Hello extends React.Component {
  render() {
    // return null
    return <h1>这是 class 组件</h1>
  }
}

// 渲染class组件
ReactDOM.render(<Hello />, document.getElementById('app'))
