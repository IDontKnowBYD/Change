/* 
  基于分离的开发思想，当前组件为：展示组件
  作用：描述如何展现（骨架、样式）
*/
import React from 'react'
// 导入任务项组件
import Todo from './Todo'

const TodoList = ({ todos, onChangeTodo }) => {
  return (
    <ul>
      {todos.map(item => (
        <Todo
          key={item.id}
          onChangeTodo={() => onChangeTodo(item.id)}
          active={item.done}
        >
          {item.name}
        </Todo>
      ))}
    </ul>
  )
}

export default TodoList
