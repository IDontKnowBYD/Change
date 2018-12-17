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

// 使用JSX创建元素：
// const dv = <div title="这是标题">Hello React -- { num + ' hehe' }</div>
// const dv = <div title="这是标题">{ arr.join('-') }</div>
const dv = <div title={ num + ' 标题' }>{ fn() }</div>

// 注意：
// const dv = <div>{ for (var i = 0; i < arr.length; i++) {} }</div>

// 渲染 JSX 对象：
ReactDOM.render(dv, document.getElementById('app'))
