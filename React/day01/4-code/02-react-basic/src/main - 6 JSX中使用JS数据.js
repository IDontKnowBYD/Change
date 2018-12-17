/* 
  JSX中使用 JS 中提供的数据：

    1 在 JSX 结构中，通过 {} 语法，来使用 JS 提供的数据
    2 注意：是 {} ，而不是 插值表达式({{}}) 这样的语法
    3 在 {} 中，可以使用 任意的JS表达式
      注意：不要在 {} 中出现任何语句，比如：if语句，for语句
      注意：不要直接在 {} 中使用对象！！！否则会报错
*/

// 4 JSX 中的注释：{ /* 错误样式： */ }
//  {} 表示要写JS代码了，中间写了 /* */ 多行注释语法

import React from 'react'
import ReactDOM from 'react-dom'

// 提供数据
const num = 1
const colors = ['red', 'green', 'blue']
const stu = {
  name: '小明'
}

function fn() {
  return 'a' + 'b'
}

// 使用 JSX 语法：
const dv = (
  <div>
    <h1>{num}</h1>
    <h2>{num + 2}</h2>
    <h2>{colors.join('-')}</h2>
    <h2>{colors}</h2>
    {/* <h2>{colors.join('')}</h2> */}
    <h2>{stu.name}</h2>
    <h2>{fn()}</h2>

    {/* 错误样式： */}
    {/* <h2>{ if (num > 2) {} }</h2> */}
    {/* <h2>{stu}</h2> */}
  </div>
)

ReactDOM.render(dv, document.getElementById('app'))
