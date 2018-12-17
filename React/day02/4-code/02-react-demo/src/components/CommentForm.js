import React from 'react'

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props)

    this.getTxtName = this.getTxtName.bind(this)
    this.getTxtContent = this.getTxtContent.bind(this)
    this.sendComment = this.sendComment.bind(this)

    this.state = {
      txtName: '',
      txtContent: ''
    }
  }

  // 获取到评论人
  getTxtName(e) {
    this.setState({
      txtName: e.target.value
    })
  }

  getTxtContent(e) {
    this.setState({
      txtContent: e.target.value
    })
  }

  // 发表评论
  // 将获取到的评论人和评论内容，传递给父组件 CommentList，由父组件将数据添加
  // 到 list 中，即可
  //
  // 实际上就是将子组件中的数据传递给父组件：
  // 1 由父组件提供的一个方法
  // 2 将这个方法传递给子组件
  // 3 由子组件调用这个方法，将数据作为参数传递
  sendComment() {
    const { txtName, txtContent } = this.state

    // console.log(txtName, txtContent)
    // console.log('子组件接受到的props：', this.props)

    // 子组件调用这个方法，将数据作为参数传递
    this.props.addComment(txtName, txtContent)
  }

  render() {
    const { txtName, txtContent } = this.state

    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="请输入评论人"
            value={txtName}
            onChange={this.getTxtName}
          />
        </div>
        <div>
          <textarea
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            value={txtContent}
            onChange={this.getTxtContent}
          />
        </div>
        <button onClick={this.sendComment}>发表评论</button>
      </div>
    )
  }
}
