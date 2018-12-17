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

// 通过 subscribe 方法来订阅state的改变
// 返回值是一个函数，这个函数，用来取消订阅，也就是说：取消后，state 再发生改变，
// 就不再执行回调函数中的代码了
const unsubscribe = store.subscribe(() => {
  console.log('当前最新状态为：', store.getState())
})

// 改变状态
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
// 取消订阅
unsubscribe()
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
console.log(store.getState()) // 4

// 创建 reducer
function counter(state = 0, action) {
  // console.log('state: ', state)
  // console.log('action: ', action)

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
