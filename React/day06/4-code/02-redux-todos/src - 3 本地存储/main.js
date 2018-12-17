/* 
  案例： todomvc
*/

// react
import React from 'react'
import ReactDOM from 'react-dom'
// react-redux
import { Provider } from 'react-redux'
// reducer
import rootReducer from './reducers'
// 导入根组件
import App from './components/App'
// 导入配置store函数
import configStore from './configStore'

const store = configStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
