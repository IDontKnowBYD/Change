/* 
  组件中 props.children 属性
    作用：用来获取到 组件的子节点
      比如：<Hello name="rose">这是组件的子节点</Hello> 中的 "这是组件的子节点" 内容
    
    组件的子节点，可以是 字符串或者JSX

    注意：如果没有给组件添加子节点，props中默认没有 children 属性
*/

import React from 'react'
import ReactDOM from 'react-dom'

const Hello = props => {
  console.log(props)
  return <div>这是一个函数组件 --> {props.children}</div>
}

ReactDOM.render(
  // <Hello name="rose">这是组件的子节点</Hello>,
  <Hello name="rose">
    <h1>这是一个元素节点</h1>
  </Hello>,
  document.getElementById('app')
)
