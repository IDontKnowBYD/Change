/* 
  react 中样式的处理:

    1 行内样式
    2 类样式
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 行内样式：1
// const dv = (
//   <div style={{ color: 'red', fontSize: 30, 'background-color': 'skyblue' }}>
//     react 元素
//   </div>
// )

// 行内样式：2
// 注意：此处应该使用 驼峰命名法 的语法来命名属性的名称
const styles = {
  div: { color: 'red', fontSize: 30, backgroundColor: 'skyblue' },
  p: {
    color: 'green'
  }
}

const dv = (
  <div style={styles.div}>
    react 元素 <p style={styles.p}>这是一个p元素</p>
  </div>
)

ReactDOM.render(dv, document.getElementById('app'))
