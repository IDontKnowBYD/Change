import React from 'react'

export default class CommentForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="请输入评论人" />
        </div>
        <div>
          <textarea cols="30" rows="10" placeholder="请输入评论内容" />
        </div>
        <button>发表评论</button>
      </div>
    )
  }
}
