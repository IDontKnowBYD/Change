/* 
  ref 和 非受控组件

  ref 的使用场景： DOM操作

  ref 在函数组件中的使用：
  1 在函数组件中，创建一个变量
  2 给DOM元素添加 ref={input => 变量 = input} 将当前DOM对象的引用赋值为 变量
  3 现在，变量 就是DOM对象了，就可以通过这个变量，进行DOM操作了
*/

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Hello = () => {
  let txt = null

  // 按钮的单击事件
  function handleClick() {
    console.log(txt)
    txt.focus()
  }

  return (
    <div>
      {/* 在函数组件中，ref的值是一个回调函数，参数就是当前DOM对象。txt = input 就表示：将当前DOM对象的印象赋值给了变量 txt，那么，就可以通过 txt 这个变量了，来访问到这个DOM对象了 */}
      <input type="text" ref={input => (txt = input)} />
      <button onClick={handleClick}>按钮</button>
    </div>
  )
}

ReactDOM.render(<Hello />, document.getElementById('app'))
