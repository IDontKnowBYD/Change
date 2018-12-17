/* 
  react 创建元素的注意点：

  1 要创建的react元素，必须是 HTML 中的元素，否则，会报错（先不考虑组件）
  2 如果该元素没有属性，第二个参数直接传入 null 即可
  3 传递给 react 元素的属性名需要注意：
    1 使用 className 表示要添加的样式，而不是用 class
    2 使用 htmlFor 代替 for 属性
      <label for="txtName">用户名</label>
      <input id="txtName" />
*/

// 2 导入两个包
import React from 'react'
import ReactDOM from 'react-dom'

// 3 创建 react 元素
// 第一个参数：表示要创建的reac元素名称
// 第二个参数：表示要给当前react元素添加的属性，类型：object
// 第三个参数：表示当前react元素的子节点（1 文本节点 2 元素节点）
// 说明：第三个以及后面的所有参数，都表示该元素的子节点
/* const dv = React.createElement(
  'div',
  {
    className: 'cls'
  },
  'Hello react'
) */

/* const dv = React.createElement(
  'label',
  {
    htmlFor: 'cls'
  },
  'Hello react'
) */

/* const dv = React.createElement(
  'div',
  // 指定任意其他属性：
  {
    id: 'dv',
    className: 'cls',
    title: '标题'
  },
  'Hello react'
) */

const dv = React.createElement(
  'div',
  {
    id: 'dv',
    className: 'cls',
    title: '标题'
  },
  React.createElement('p', null, '这是div的子节点 p'),
  React.createElement('span', null, '这是div的子节点 span')
)

// 4 渲染react元素
// 第一个参数：表示要渲染哪个react元素
// 第二个参数：表示页面挂载点，也就是将 react元素 渲染到页面中的哪个地方
ReactDOM.render(dv, document.getElementById('app'))
