/* 
  props 的特点：
    1 类型：object
    2 对象中的属性，表示传递给组件的数据
    3 props 是只读的，只能读取props中的数据。无法直接修改或添加属性到props中
*/

// 1 导入两个react包
import React from 'react'
import ReactDOM from 'react-dom'

// 2 创建组件
function Hello(props) {
  // console.log(props)

  // 无法修改属性
  // props.age = 20
  // 无法添加属性
  // props.test = 66

  // JSX：在 js 代码中直接写 HTML 结构
  return <div>这是 Hello 组件</div>
}

// 3 渲染组件
ReactDOM.render(
  <Hello name="rose" age={19} colors={['red', 'green']} />,
  document.getElementById('app')
)
