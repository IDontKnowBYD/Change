// 演示：react中 JSX 语法的使用
// JSX：JavaScript XML 的简称，表示：在JS代码中书写XML；对于前端来说，就是在JS代码中书写HTML结构

// 虽然，代码中没有直接使用 react ，但是不能省略 react 原因：
// 1 react 是核心库，ReactDOM 依赖于react
// 2 因为在JSX语法的转化过程中，用到 React.createElement 因此，也不能省略React

// JSX语法转化的过程：JSX -> createElemenet的语法形式 -> 虚拟DOM对象

import React from 'react'
import ReactDOM from 'react-dom'

// 使用JSX创建元素：
// const dv = <div title="这是标题">Hello React</div>

const dv = <div className="shopping-list">
  <h1>Shopping List for</h1>
  <ul>
    <li>Instagram</li>
    <li></li>
  </ul>
</div>

// 渲染 JSX 对象：
ReactDOM.render(dv, document.getElementById('app'))