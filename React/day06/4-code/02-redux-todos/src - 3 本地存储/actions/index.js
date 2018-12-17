/* 
  actions
*/

// 添加任务
export const addTodo = name => ({
  type: 'ADD_TODO',
  name
})

// 切换任务状态
export const changeTodo = id => ({
  type: 'CHANGE_TODO',
  id
})

// 显示不同状态的任务
export const setVisibility = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
