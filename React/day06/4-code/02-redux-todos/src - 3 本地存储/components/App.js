import React from 'react'
// 导入子组件
import AddTodo from './AddTodo'
import TodoList from '../containers/TodoList'
import Footer from './Footer'

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

export default App
