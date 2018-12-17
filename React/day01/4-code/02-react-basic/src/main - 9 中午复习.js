// 1 导入两个react包
import React from 'react'
import ReactDOM from 'react-dom'

// 2 创建组件
function Hello(props) {
  console.log(props)
  // JSX：在 js 代码中直接写 HTML 结构
  return <div>这是 Hello 组件</div>
}

// 3 渲染组件
ReactDOM.render(
  <Hello name="rose" age={19} colors={['red', 'green']} />,
  document.getElementById('app')
)
