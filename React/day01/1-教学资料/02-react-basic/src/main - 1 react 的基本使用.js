// react 的基本使用：
// 1 导入 react 和 react-dom

// react 的核心包：
import React from 'react'
// reactdom 是用来渲染DOM结构的
import ReactDOM from 'react-dom'

// 2 创建 react 元素
// 第一个参数：表示要创建什么类型的元素
// 第二个参数：是一个对象，表示添加给元素的属性
// 第三个参数：表示当前元素的子节点（文本节点、元素节点）

// dv 实际上就是虚拟DOM对象
const dv = React.createElement('div', {
  title: '这是标题'
}, 'Hello React')

// 3 渲染 react 元素
ReactDOM.render(dv, document.getElementById('app'))