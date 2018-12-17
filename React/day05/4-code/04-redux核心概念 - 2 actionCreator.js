/* 
  核心概念 - action 动作、行为

  1 action是一个普通的JS对象
  2 action对象中必须提供一个 type 属性，用来表示当前动作的类型
  3 type属性的值是一个字符串，采用全大写字母的方式来表示，多个单词之间用下划线链接
  4 如果该动作用到了数据，直接将数据添加到该对象中，来提供这个动作需要使用的数据

  5 一般会使用函数来创建action
    这个函数就叫做： actionCreator（action创建器）
*/
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// 简化：
// 如果返回的是一个对象，应该使用小括号来包裹这个{}，这样就是在告诉JS引擎将{}解析为对象而不是代码块
const increment = () => ({
  type: 'INCREMENT'
})

// 调用函数increament就能得到一个值加1的动作：
const inc = increment() // { type: 'INCREMENT' }
console.log('输出：', inc)
// if (true) {  }

// 创建值减1的动作：
const decrement = () => ({
  type: 'DECREMENT'
})

const des = decrement()
console.log('输出：', des)

// 创建添加任务的动作：
const addTodo = name => ({
  type: 'ADD_TODO',
  name
})

const todo1 = addTodo('study redux')
const todo2 = addTodo('study react')
console.log('输出：', todo1)
console.log('输出：', todo2)

// 创建切换任务状态的动作：
const toggleTodo = id => ({
  type: 'CHANGE_TODO',
  id
})

const todo3 = toggleTodo(2)
const todo4 = toggleTodo(4)
console.log('输出：', todo3)
console.log('输出：', todo4)

/* 
// 创建值加1的动作：
const increment = {
  type: 'INCREMENT'
}

// 创建值减1的动作：
const decreament = {
  type: 'DECREMENT'
}

// 创建添加任务的动作：
const addTodo = {
  type: 'ADD_TODO',
  name: '学习 redux'
}

// 创建切换任务状态的动作：
// 因为有很多个任务，所以，该动作需要知道要切换任务的id，通过 id 找到该任务，然后，
// 让其任务状态取反即可
const changeTodo = {
  type: 'CHANGE_TODO',
  id: 2
} */
