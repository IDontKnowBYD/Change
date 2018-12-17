// JSX中使用JS：
// 在 JSX 语法中，通过 {} 来使用JS代码
// 注意：在 {} 中可以直接使用任意的真正的JS代码
// 注意：只能在 {} 中使用表达式，而不能出现语句（比如：if、for 等）
// 说明：可以在任意的地方通过 {} 来使用JS代码构建HTML结构

import React from 'react'
import ReactDOM from 'react-dom'

// JS变量
const num = 666
const arr = ['a', 'b', 'c']
const fn = function () {
  return Math.random()
}

// 在JSX中使用注释：
const dv = <div>
  { /* JSX 的注释语法 */ }

  <h1>标题</h1>
</div>

// 渲染 JSX 对象：
ReactDOM.render(dv, document.getElementById('app'))
