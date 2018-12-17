/* 
  任务项组件： 展示组件
*/

import React from 'react'

// onChangeTodo 是一个回调函数，用来实现任务状态的切换
// active 表示当前任务的完成状态，如果任务完成了，结果为：true
// children 是 react组件中提供的一个特殊属性，用来表示使用该组件时传递给该组件的子节点
const Todo = ({ onChangeTodo, active, children }) => (
  <li
    onClick={onChangeTodo}
    style={{ textDecoration: active ? 'line-through' : 'none' }}
  >
    {children}
  </li>
)

export default Todo
