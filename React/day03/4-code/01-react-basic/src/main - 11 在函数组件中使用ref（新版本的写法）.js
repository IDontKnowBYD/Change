/* 
  ref 和 非受控组件

  ref 的使用场景： DOM操作

  ref 在函数组件中的使用：
  1 通过 React.createRef() 创建一个 ref对象
  2 给DOM元素添加 ref={txt} 将当前DOM对象的引用赋值为 变量
  3 通过 txt.current 获取到当前DOM对象
*/

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Hello = () => {
  let txt = React.createRef()

  // 按钮的单击事件
  function handleClick() {
    console.log(txt.current)
    txt.current.focus()
  }

  return (
    <div>
      <input type="text" ref={txt} />
      <button onClick={handleClick}>按钮</button>
    </div>
  )
}

ReactDOM.render(<Hello />, document.getElementById('app'))
