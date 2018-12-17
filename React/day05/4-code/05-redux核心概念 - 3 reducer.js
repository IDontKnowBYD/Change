/* 
  reducer 的作用： 根据不同的action来完成对应的动作

  1 reducer 是一个函数
  2 reducer 应该是一个纯函数（ 函数式编程中的一个概念 ）
  3 reducer 不要直接修改传递进来的参数，而应该根据传入的数据，返回一个新的数据
  4 语法：  (prevState, action) => newState
    根据传入的state和action，完成这个动作，并且返回一个新的state
  5 reducer 如果无法处理传入的action，应该返回参数state，而不是不做任何处理！！！
  6 reducer 的第一个参数是 完成任务需要的状态， 这个参数应该有默认值，默认值是什么，应该根据动作和具体的功能来决定！！！
*/

/**
 * 实例：完成添加任务的动作
 *
 * todos 任务列表的reducer
 * @param {Array} state 初始状态，在当前实例中它是一个数组。在当前例子中 state 就是任务列表数据
 * @param {object} action 要完成的动作对象
 */
function todos(state = [], action) {
  switch (action.type) {
    // 添加任务：
    case 'ADD_TODO':
      // ！！！不要直接往参数state中添加数据，这不符合 reducer 纯函数的规则！！！
      // state.push({})

      // 没有直接修改state，而是返回了一个新的列表项数组 []
      // 新数组中，先获取到原始数组中的内容，再添加新的任务数据
      return [
        ...state,

        // 要添加的任务
        {
          name: action.name,
          done: false
        }
      ]

    // reducer应该添加 default 来返回默认的state
    // 这样，就能保证，不管传入什么类型的cation进行，都能够保证有正确的返回值
    default:
      return state
  }
}

// 模拟调用：
const newState = todos(undefined, {
  type: 'ADD_TODO1',
  name: '学习 redux'
})
console.log('reducer完成动作：', newState)
