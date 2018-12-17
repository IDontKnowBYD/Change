/* 
  react 中的组件：
    1 react中有两种组件：函数组件 和 class组件
      其实，在 react 中，所有的内容，都是 JS ！！！

    2 函数组件：使用一个函数来作为一个组件，只要创建一个 JS 中的函数，就相当于创建好了一个组件了
    3 class组件


    函数组件中需要注意的地方：
    1 组件名称必须是以大写字母开头的！！！
      react 就是通过首字母是否大写来区分是一个组件还是一个普通的react元素
    2 函数必须有返回值：
      2.1 return null 表示什么都不渲染
      2.2 如果需要渲染内容，就将要渲染的内容作为返回值返回即可
        return <div>这是 Hello 组件</div>
        返回的内容可以是： JSX或字符串
    3 函数返回值 return 后面不能直接换行
      如果要换行，应该使用 () 包裹所有的 JSX 内容！！！
    4 组件也必须只能有一个唯一的根节点
    5 组件名称可以是单标签也可以是双标签
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 创建函数组件
function Hello() {
  // return null
  // return 'Hello 组件'
  // return <div>这是 Hello 组件</div>

  // 注意：return 后面换行 与 不换行作用是不同的！！！
  /* 
  return
    <div>这是 Hello 组件</div> 
  */

  return (
    <div>
      这是 Hello 组件 <p>这是第二个元素</p>
      <span />
    </div>
  )
}

// 渲染组件
ReactDOM.render(<Hello />, document.getElementById('app'))
