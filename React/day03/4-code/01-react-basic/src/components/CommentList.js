import React from 'react'

// 导入css文件
import '../css/index.css'

// 导入子组件
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

export default class CommentList extends React.Component {
  constructor(props) {
    super(props)

    // 从 本地存储 中获取到评论数据
    const list = JSON.parse(localStorage.getItem('comment')) || []

    this.state = {
      // 评论列表数据
      list
    }

    this.addComment = this.addComment.bind(this)
  }

  // 因为数据更新后，会调用 DidUpdate 这个钩子函数
  // 所以，我们可以将数据存储放在这个钩子函数中，并且，这个钩子函数中获取到的state
  // 就是最新的state
  componentDidUpdate() {
    // console.log('组件完成更新', this.state.list)
    // 将数据保存到本地存储中
    localStorage.setItem('comment', JSON.stringify(this.state.list))
  }

  renderCommentItem() {
    return this.state.list.map(item => <CommentItem key={item.id} {...item} />)
  }

  // 1 父组件提供一个方法
  addComment(name, content) {
    // console.log('父组件中接收到子组件传递过来的数据：', name, content, this)
    this.setState(
      {
        list: [
          ...this.state.list,
          {
            id: Math.random(),
            name,
            content
          }
        ]
      }
      // () => {
      //   // 将数据保存到本地存储中
      //   localStorage.setItem('comment', JSON.stringify(this.state.list))
      // }
    )
  }

  render() {
    return (
      <div style={{ border: '1px dotted red' }} className="commentlist">
        <h1>评论列表组件：</h1>

        {/* 2 将方法传递给子组件 */}
        <CommentForm addComment={this.addComment} />
        <ul>{this.renderCommentItem()}</ul>
      </div>
    )
  }
}
