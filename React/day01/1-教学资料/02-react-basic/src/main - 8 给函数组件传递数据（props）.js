/* 
  react 组件化开发：

  要解决的问题：react 如何创建组件？
  两种创建组件的方式：
  1 函数式组件
  2 class组件


  函数式组件，又叫做：无状态组件
    是通过JS中的函数，来创建的组件，因此称为：函数式组件
    不管是函数声明还是函数表达式或者箭头函数，都可以创建函数组件
  
  1 如何给组件传值？？？
    直接在组件上面写要传递的属性即可，比如：
    <Hello name="jack" /> name 就是传递给 Hello 组件的数据
  2 如何接受到给组件传递过来的数据？？？
    使用函数的形参props（形参名称不是固定的，只是越好叫这个名字）来接受传递过来的数据
    props 的类型是：对象
      对象中就是传递过来数据的键值对
      注意：props 是只读的对象！！！ 只能读取props的值，但是，无法修改或添加或删除props的数据
      
  结论：可以传递任意数据给组件！！！
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 使用箭头函数创建的函数组件：
const Hello = (props) => {
  console.log(props)

  // props.methos()
  // 修改数据，不行
  // props.name = 'rose'
  // 添加数据，不行
  // props.aaa = 666

  return (
    <div>Hello 组件，接受到传递过来的数据：{ props.name } { props.age }</div>
  )
}

// 渲染react元素
ReactDOM.render(
  // height={180} 表示传递数值180给组件
  // age="19" 表示传递字符串19给组件
  <Hello name="jack" age="19" height={180} colors={ ['red', 'green', 'blue'] } methos={ function () { console.log(1) } } />,
  document.getElementById('app'))
