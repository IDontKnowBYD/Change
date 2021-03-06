/* 
  reducers

  如果一个 redux 应用中，存在多个 reducer，此时，就需要将多个其合并为
  一个 根reducer，然后，将 根reducer 作为参数传递给 createStore

  使用 redux 中提供的方法 combineReducers 方法来合并各个reducer为一个reducer
*/
// uuid 用来生产唯一不重复的id
import { v4 } from 'uuid'
// 导入 combineReducers
import { combineReducers } from 'redux'

// 任务列表的reducer
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: v4(),
          name: action.name,
          done: false
        }
      ]
    case 'CHANGE_TODO':
      return state.map(item => {
        if (item.id !== action.id) {
          return item
        }

        return {
          ...item,
          done: !item.done
        }
      })
    default:
      return state
  }
}

// 显示不同状态的任务的reducer
// 通过这个 reducer 来得到要展示任务的标识
// state的默认值为 SHOW_ALL 表示：展示所有任务
// 其他值为：
//  SHOW_ACTIVE 表示：展示未完成状态的任务
//  SHOW_COMPLETED 表示：展示已完成状态的任务
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

// 参数是一个对象，对象中的每个属性都是一个reducer
// 注意：合并reducer后，传入的对象参数结构将会作为redux应用中state的结构
const rootReducer = combineReducers({
  todos,
  visibilityFilter
})

export default rootReducer
