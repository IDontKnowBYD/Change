/* 
  容器组件：

  作用：描述如何运行（数据获取、状态更新）
  容器组件中都是直接与 redux 进行交互的代码逻辑，容器组件是由 connect 方法生产的！
  在 容器组件 中，一般看不到该组件的结构， 而是用来包裹 展示组件 ，为 展示组件 提供
  state 或 dispatch 的逻辑
*/

import { connect } from 'react-redux'
// 导入withRouter
import { withRouter } from 'react-router-dom'
// 导入切换任务action
import { changeTodo } from '../actions'
// 导入展示组件TodoList
import TodoList from '../components/TodoList'

// 为了实现显示不同状态任务功能，现在要根据当前 redux 中 visibilityFilter 的值
// 来决定显示哪些任务，而不再是直接显示所有的任务
// 注意：不要修改 todos 数据源！！！
const getVisibilityTodos = (filter, todos) => {
  if (filter === 'all') {
    // 所有
    return todos
  } else if (filter === 'active') {
    // 未完成
    return todos.filter(item => !item.done)
  } else if (filter === 'completed') {
    // 完成
    return todos.filter(item => item.done)
  } else {
    return todos
  }
}

// 路由发生改变后，该方法也会被重新调用一次
// 这样就可以获取到最新的 filter 值，然后，重新根据当前filter值
// 来拿到当前要展示的数据，并且传递给组件，由组件重新渲染这些数据
const mapStateToProps = (state, ownProps) => {
  let filter = ownProps.match.params.filter
  console.log('TodoList 中接受到最新的路由参数为：', filter)
  // 如果没有filter说明要展示所有的任务
  if (typeof filter === 'undefined') {
    filter = 'all'
  }

  return {
    // 注意：合并 reducer 后，应该只将该组件中用到数据传递给该组件即可
    todos: getVisibilityTodos(filter, state.todos)
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

export default withRouter(TodoListContainer)
