/* 
  给组件传递数据：

  第一步：在组件标签上面添加要传递的数据
    <Hello name="jack" /> 就表示要给组件 Hello 传递数据name
    如果要传递非字符串类型的数据，应该使用 {} 包裹要传递的数据
    可以通过 {} 给组件传递任意的数据，比如：数值、数组、对象、函数 等
  
  第二步：通过函数的参数 props 来获取到传递过来的数据
    说明：props是形参，可以是任意名称，但是，推荐使用 props
  
  props 的说明：
    1 类型：object
    2 对象中的属性，表示传递给组件的数据
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 创建函数组件
function Hello(props) {
  console.log('组件接受到传递过来的数据：', props)
  props.clickHandler()
  return (
    <div>
      这是 Hello 组件，你好：
      {props.name}
      {props.el}
    </div>
  )
}

const dv = <div>这是一个div</div>

// 渲染组件
ReactDOM.render(
  <Hello
    name="jack"
    age={19}
    colors={['red', 'green']}
    clickHandler={() => console.log('传递了一个函数')}
    el={dv}
  />,
  document.getElementById('app')
)
