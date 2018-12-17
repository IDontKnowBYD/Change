/* 
  核心概念 - action 动作、行为

  1 action是一个普通的JS对象
  2 action对象中必须提供一个 type 属性，用来表示当前动作的类型
  3 type属性的值是一个字符串，采用全大写字母的方式来表示，多个单词之间用下划线链接
  4 如果该动作用到了数据，直接将数据添加到该对象中，来提供这个动作需要使用的数据
*/

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
}
