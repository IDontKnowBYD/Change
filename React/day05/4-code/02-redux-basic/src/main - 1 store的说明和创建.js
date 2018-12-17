/* 
  store 仓库：
  
  1 组成： 1 state 2 操作state的方法
  2 它是一个管理者，负责将 action 和 reducer 关联到一起
  3 一个redux应用中，应该只有一个store

  如何创建 store ？
  1 安装：npm i -S redux
  2 导入 redux 包
  3 调用方法，创建store
*/

// 导入 createStore 函数，用来创建 store
import { createStore } from 'redux'

// 注意： createStore函数 需要一个reducer来作为参数
const store = createStore(counter)

// 创建 reducer
// 创建一个 计数器 reducer，用来实现值加1 和 值减1 的功能
// state 默认值的说明：因为要实现一个计数器，我们约定计数器就是从 0 开始计算的，所以，state默认值，我们设置为 0
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
