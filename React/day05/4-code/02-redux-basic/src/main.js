import { createStore } from 'redux'

// 导入react
import React from 'react'
import ReactDOM from 'react-dom'

// 创建reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// 创建actionCreator
const increment = () => ({
  type: 'INCREMENT'
})
const decrement = () => ({
  type: 'DECREMENT'
})

// 创建store
// 通过传入 第二个参数 ，来启用 redux 插件，来分析 redux 中数据的改变（时间旅行）
// https://github.com/zalmoxisus/redux-devtools-extension#usage
const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// 创建组件
const Counter = () => {
  return (
    <div>
      <h1>{store.getState()}</h1>
      <button onClick={() => store.dispatch(increment())}>+1</button>
      <button onClick={() => store.dispatch(decrement())}>-1</button>
    </div>
  )
}

// 渲染DOM：
const render = () => {
  ReactDOM.render(<Counter />, document.getElementById('app'))
}

// 只要状态改变，就再调用一次：
store.subscribe(render)

// 进入页面就调用一次：
render()
