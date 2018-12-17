import React from 'react'

// 导入子组件
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

export default class CommentList extends React.Component {
  render() {
    return (
      <div>
        <h1>评论列表组件：</h1>
        <CommentForm />
        <ul>
          <CommentItem />
        </ul>
      </div>
    )
  }
}
