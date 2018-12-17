/* 
  store 仓库中提供的三个核心方法：

  1 getState() 获取当前store中的状态
  2 dispatch(action) 分发action，也就是：触发某个动作
  3 subscribe(回调函数) 订阅，当store中的state发生改变的时候，就会触发回调函数
*/

// 导入 createStore 函数，用来创建 store
import { createStore } from 'redux'

// 注意： createStore函数 需要一个reducer来作为参数
const store = createStore(counter)

// 创建一个actionCreator
const increment = () => ({
  type: 'INCREMENT'
})

// 改变状态
// store.dispatch({ type: 'INCREMENT' })
store.dispatch(increment())

// 创建 reducer
function counter(state = 0, action) {
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
