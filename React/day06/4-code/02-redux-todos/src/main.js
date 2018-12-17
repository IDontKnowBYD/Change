/* 
  案例： todomvc

  在 redux 中 配合 路由使用：

  1 安装： npm i -S react-router-dom
  2 导入 路由
*/

// react
import React from 'react'
import ReactDOM from 'react-dom'
// react-redux
import { Provider } from 'react-redux'
// react-router-dom
import { HashRouter as Router, Route } from 'react-router-dom'
// reducer
import rootReducer from './reducers'
// 导入根组件
import App from './components/App'
// 导入配置store函数
import configStore from './configStore'

const store = configStore(rootReducer)

// 问题： Route 中的path，也就是路由规则，写什么？？？
// 因为在该 todomvc 案例中，只有一个 App 组件，所以，这个 path 应该能够匹配
// 1 /
// 2 /active
// 3 /completed
// 以上三种哈希值才可以
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
