import React from 'react'

// 导入子组件
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

let newId = 4

export default class CommentList extends React.Component {
  constructor(props) {
    super(props)

    this.addComment = this.addComment.bind(this)

    this.state = {
      list: [
        { id: 1, name: '小明', content: '沙发！！！' },
        { id: 2, name: '小红', content: '小明，居然是你' },
        { id: 3, name: '小刚', content: '小明，放学你别走！！！' }
      ]
    }
  }

  renderCommentItem() {
    return this.state.list.map(item => {
      return <CommentItem key={item.id} {...item} />
    })
  }

  // 提供一个方法，用来接受子组件中传递过来的数据：
  addComment(name, content) {
    // console.log('父组件中的方法调用了', name, content)
    this.setState({
      list: [
        ...this.state.list,
        {
          id: newId++,
          name,
          content
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <h1>评论列表组件：</h1>
        <CommentForm addComment={this.addComment} />
        <ul>{this.renderCommentItem()}</ul>
      </div>
    )
  }
}
