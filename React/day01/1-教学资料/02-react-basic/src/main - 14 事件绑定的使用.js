import React from 'react'
import ReactDOM from 'react-dom'

// 创建有状态组件：
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>这是标题</h1>

        {/* 绑定事件：通过 on+事件名称，事件名称首字母大写 */}
        <button 
          onClick={() => console.log('单击事件出发了')}
          onMouseEnter={() => console.log('鼠标以上来了') }
          >绑定事件</button>
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(
  <Hello />,
  document.getElementById('app')
)