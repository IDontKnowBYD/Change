import React from 'react'
import ReactDOM from 'react-dom'

// 创建react元素（ --> 虚拟DOM对象）
// 使用 JSX 语法，来创建（推荐！！！）
// JSX -> React.createElement() -> 虚拟DOM对象
const dv = <div>这就是一个JSX对象</div>

// 渲染react元素
ReactDOM.render(dv, document.getElementById('app'))
