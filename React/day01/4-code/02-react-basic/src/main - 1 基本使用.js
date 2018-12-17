/* 
  react 的基本使用：

  1 安装：npm i -S react react-dom

    react 核心包
    react-dom 用来将 JSX语法 （或者 react元素） 渲染为浏览器中能够识别的HTML内容

  2 在 main.js 中导入两个包

  3 创建 react 元素

  4 将创建好的 reac元素 渲染到页面中
*/

// 2 导入两个包
import React from 'react'
import ReactDOM from 'react-dom'

// 3 创建 react 元素
// 第一个参数：表示要创建的reac元素名称
// 第二个参数：表示要给当前react元素添加的属性，类型：object
// 第三个参数：表示当前react元素的子节点（1 文本节点 2 元素节点）
const dv = React.createElement(
  'div',
  {
    id: 'dv'
  },
  'Hello react'
)

// 4 渲染react元素
// 第一个参数：表示要渲染哪个react元素
// 第二个参数：表示页面挂载点，也就是将 react元素 渲染到页面中的哪个地方
ReactDOM.render(dv, document.getElementById('app'))
