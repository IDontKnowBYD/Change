/* 
  案例： todomvc
*/
// react
import React from 'react'
import ReactDOM from 'react-dom'
// redux
import { createStore } from 'redux'
// react-redux
import { Provider } from 'react-redux'
// reducer
import rootReducer from './reducers'
// 导入根组件
import App from './components/App'

// 创建store
const store = createStore(rootReducer)

// console.log('合并reducer后的state为：', store.getState())

store.subscribe(() => {
  console.log('state为：', store.getState())
})

// 注意：Provider组件只能包含一个子组件，所以，无法直接将 AddTodo组件 和 TodoList组件
// 作为 Provider组件的子组件，而应该提供一个根组件，来包裹所有的子组件。最终，再将
// 根组件作为 Provider的子组件
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

/* 
// 测试 action 和 reducer
import { addTodo } from './actions'

console.log('默认状态：', store.getState())

// 分发添加任务的action
store.dispatch(addTodo('测试action和reducer'))
console.log('当前状态：', store.getState())
 */
