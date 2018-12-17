/* 
  JSX 的注意点：

  1 JSX的标签名称也应该是HTML中的标签名字
  2 要添加 class，也应该使用 className
  3 JSX结构，必须有一个唯一的根节点
  4 写 JSX 语法的时候，推荐使用 () 来包裹所有的元素
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 使用 JSX 语法：
const dv = (
  <div>
    <h1 className="title">Hello JSX</h1>
    <div>第二个元素</div>
  </div>
)

ReactDOM.render(dv, document.getElementById('app'))
