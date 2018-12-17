/* 
  React.createElement 方法的缺点：
  1 语法太繁琐
  2 不直观，无法直接看出 HTML 结构

  所以，以后我们写 React 不再使用 createElement 方法，而应该使用 JSX ！！！
*/

// 2 导入两个包
import React from 'react'
import ReactDOM from 'react-dom'

// 3 创建 react 元素
const dv = React.createElement(
  'div',
  { className: 'shopping-list' },
  React.createElement('h1', null, 'Shopping List for '),
  React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'Instagram'),
    React.createElement('li', null, 'WhatsApp')
  )
)

// 4 渲染react元素
// 第一个参数：表示要渲染哪个react元素
// 第二个参数：表示页面挂载点，也就是将 react元素 渲染到页面中的哪个地方
ReactDOM.render(dv, document.getElementById('app'))
