import React from 'react'

// 当前文件中虽然没有直接用到 React ，但是，也必须导入 React
// 因为 JSX 语法在转化的过程中，用到了 React

// JSX语法的转化过程：
// JSX -> React.createElement() -> 虚拟DOM对象 -> HTML结构

// 虚拟DOM对象
// const dv = (
//   <div key="123" id="title">
//     <h1>孩子</h1>
//   </div>
// )
// console.log('react中的虚拟DOM对象：', dv)

// export default function CommentItem(props) {
// { user, content } 表示从参数 props 中结构出：user 和 content 这两个属性
export default function CommentItem({ user, content }) {
  return (
    <li>
      <h3>
        评论人：
        {user}
      </h3>
      <p>
        评论内容：
        {content}
      </p>
    </li>
  )
}
