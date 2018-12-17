// 1.1 导入的时候，可以单独导入 Component
import React, { Component } from 'react'

// 导入子组件
import CommentItem from './CommentItem'

// 1.2 继承的时候，直接继承上面导入的 Component 即可
export default class CommentList extends Component {
  // 初始化state
  state = {
    list: [
      { id: 1, user: '张三', content: '哈哈，沙发' },
      { id: 2, user: '张三2', content: '哈哈，板凳' },
      { id: 3, user: '张三3', content: '哈哈，凉席' },
      { id: 4, user: '张三4', content: '哈哈，砖头' },
      { id: 5, user: '张三5', content: '哈哈，楼下山炮' }
    ]
  }

  // 将渲染列表项组件的代码，抽离为一个独立的方法
  renderCommentItem() {
    return this.state.list.map(item => {
      return (
        // 原始写法：
        // <CommentItem key={item.id} user={item.user} content={item.content} />

        // 对象扩展运算符：
        <CommentItem key={item.id} {...item} />
        // 相当于： <CommentItem key={item.id} id={item.id} user={item.user} content={item.content} />
      )
    })
  }

  render() {
    return (
      <div>
        <h1>评论列表组件：</h1>
        <ul>{this.renderCommentItem()}</ul>
      </div>
    )
  }
}
