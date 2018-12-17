/* 
  store 仓库中提供的三个核心方法：

  创建store的时候，将 reducer 作为参数传递给了store。
  store内部会自动调用传入的 reducer ，目的是为了：拿到默认的状态
  如何获取到默认状态？？？ 
    调用 reducer 的时候，传递一个 action 
      action ==> {type: "@@redux/INITf.4.b.h.v.i"}
    这个action是无法被我们自己写的 reducer 来处理的，因此，就执行了 switch-case 中的 default ，返回了参数state的默认值。
    store 拿到 reducer 方法的返回值，来作为了 默认的状态！！！

  1 getState() 获取当前store中的状态
*/

// 导入 createStore 函数，用来创建 store
import { createStore } from 'redux'

// 注意： createStore函数 需要一个reducer来作为参数
const store = createStore(counter)

// 1 获取状态
console.log('获取状态为：', store.getState())

// 创建 reducer
// 创建一个 计数器 reducer，用来实现值加1 和 值减1 的功能
// state 默认值的说明：因为要实现一个计数器，我们约定计数器就是从 0 开始计算的，所以，state默认值，我们设置为 0
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
