// redux
import { createStore } from 'redux'

const configStore = rootReducer => {
  // 取数据
  const todos = JSON.parse(localStorage.getItem('todos')) || undefined
  const initialState = {
    todos
  }

  // 创建store
  const store = createStore(rootReducer, initialState)

  // 监听stat变化
  store.subscribe(() => {
    // 注意：存储的数据仅仅是整个 redux state 中的 todos 数据
    localStorage.setItem('todos', JSON.stringify(store.getState().todos))
  })

  return store
}

export default configStore
