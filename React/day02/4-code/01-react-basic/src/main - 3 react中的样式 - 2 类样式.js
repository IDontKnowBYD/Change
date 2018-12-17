/* 
  react 中样式的处理:

    1 行内样式
    2 类样式
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 导入样式文件
import './css/index.css'

const dv = (
  <div className="container">
    react 元素 <p>这是一个p元素</p>
  </div>
)

ReactDOM.render(dv, document.getElementById('app'))
