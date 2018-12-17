/* 
  store 仓库中提供的三个核心方法：

  1 getState() 获取当前store中的状态
  2 dispatch(action) 分发action，也就是：触发某个动作
*/

// 导入 createStore 函数，用来创建 store
import { createStore } from 'redux'

// 注意： createStore函数 需要一个reducer来作为参数
const store = createStore(counter)

// 1 获取状态
console.log('-----------获取状态为：', store.getState())

// 2 分发action
// dispatch方法的参数为：action对象
store.dispatch({ type: 'INCREMENT' })
// 相当于： const newState = counter(0, { type: 'INCREMENT' })
// 获取到 newState（1） 以后， 更新store中旧的state，也就是让 store 中的state 变为 newState，也就是：1
console.log('-----------获取最新状态为：', store.getState()) // 获取到当前最新的state

// 再分发一个动作：
store.dispatch({ type: 'INCREMENT' })
// 相当于：const newState = counter(1, { type: 'INCREMENT' })
//        newState 值为 2，更新 store 中的state 为 newState 也就是：2
console.log('-----------获取最新状态为：', store.getState()) // 获取到当前最新的state

// 创建 reducer
function counter(state = 0, action) {
  console.log('state: ', state)
  console.log('action: ', action)

  switch (action.type) {
    // 值加1
    case 'INCREMENT':
      return state + 1

    // 值减1
    case 'DECREMENT':
      return state - 1

    // 默认值：
    default:
      return state
  }
}
