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
// 说明： createStore方法的第二个参数就是用来设置默认状态的！！！
// 说明：第二个参数（默认值）应该与当前 redux 应用中state的结构相同，或者，如果指向设置
//       某个属性的默认值，那么，只需要提供该属性即可。
//       注意：提供的属性，应该与 redux 中state属性名相同！！！
const initialState = {
  todos: [
    {
      id: 1,
      name: '睡觉',
      done: false
    }
  ],
  visibilityFilter: 'SHOW_COMPLETED'
}
const store = createStore(rootReducer, initialState)

// console.log('合并reducer后的state为：', store.getState())

store.subscribe(() => {
  console.log('state为：', store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
