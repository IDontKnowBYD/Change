/* 
  react 组件化开发：

  要解决的问题：react 如何创建组件？
  两种创建组件的方式：
  1 函数式组件
  2 class组件


  函数式组件，又叫做：无状态组件
    是通过JS中的函数，来创建的组件，因此称为：函数式组件
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 创建一个函数组件：
// 注意：
//  1 函数必须有返回值，可以返回：JSX或者null
//    如果返回 null，表示什么都不渲染
//    如果要渲染内容，需要返回对应的JSX
//  2 函数组件的名称是以大写字母开头，react就是根据这个特点来区分是不是组件
//  3 使用函数的名字作为要渲染组件的名称，可以使用双标签或者单标签
//  4 推荐使用 () 来包裹return后面的 JSX 结构
//  5 组件的结构中只能有一个唯一的根元素！！！
function Hello () {
  // return null

  // 这样写代码是会报错的！！！因为这样的代码会被解析为两句代码，第一句 return，但是没有返回任何的任务，不满足 函数组件的要求，因此会报错
  // return 
  //   <div>这是 Hello 组件</div>

  return (
    <div>
      <div>这是 Hello 组件</div>
      <div>这是 Hello 组件</div>
    </div>
  )
}

// 渲染react元素
ReactDOM.render(
  // 渲染组件，直接使用函数的名字作为组件的名称
  // <Hello></Hello>,
  <Hello />,
  document.getElementById('app'))
