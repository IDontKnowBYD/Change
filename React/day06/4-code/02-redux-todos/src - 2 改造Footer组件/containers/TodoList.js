/* 
  容器组件：

  作用：描述如何运行（数据获取、状态更新）
  容器组件中都是直接与 redux 进行交互的代码逻辑，容器组件是由 connect 方法生产的！
  在 容器组件 中，一般看不到该组件的结构， 而是用来包裹 展示组件 ，为 展示组件 提供
  state 或 dispatch 的逻辑
*/

import { connect } from 'react-redux'
// 导入切换任务action
import { changeTodo } from '../actions'
// 导入展示组件TodoList
import TodoList from '../components/TodoList'

// 为了实现显示不同状态任务功能，现在要根据当前 redux 中 visibilityFilter 的值
// 来决定显示哪些任务，而不再是直接显示所有的任务
// 注意：不要修改 todos 数据源！！！
const getVisibilityTodos = (filter, todos) => {
  // console.log('getVisibilityTodos', filter, todos)
  if (filter === 'SHOW_ALL') {
    // 所有
    return todos
  } else if (filter === 'SHOW_ACTIVE') {
    // 未完成
    return todos.filter(item => !item.done)
  } else if (filter === 'SHOW_COMPLETED') {
    // 完成
    return todos.filter(item => item.done)
  } else {
    return todos
  }
}

const mapStateToProps = state => {
  // console.log('TodoList mapStateToProps', state)
  return {
    // 注意：合并 reducer 后，应该只将该组件中用到数据传递给该组件即可
    todos: getVisibilityTodos(state.visibilityFilter, state.todos)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeTodo(id) {
      dispatch(changeTodo(id))
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
