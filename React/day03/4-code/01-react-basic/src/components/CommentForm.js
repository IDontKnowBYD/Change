import React from 'react'

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      txtName: '',
      txtContent: ''
    }

    // bind
    this.sendComment = this.sendComment.bind(this)
    this.getTxtName = this.getTxtName.bind(this)
    this.getTxtContent = this.getTxtContent.bind(this)
  }

  // 发表评论事件
  // sendComment = () => {
  //   console.log('单击事件触发了', this)
  // }
  sendComment() {
    const { txtName, txtContent } = this.state

    if (txtName.trim() === '' || txtContent.trim() === '') {
      return
    }

    // console.log('单击事件触发了', txtName, txtContent, this.props)
    // 3 调用父组件中传递过来的方法，将数据作为参数传递给这个方法
    this.props.addComment(txtName, txtContent)

    // 清空文本框内容
    // 因为文本框的值已经与state双向绑定到一起了，所以，要情况文本框的值，只要清空state中的值即可
    this.setState({
      txtName: '',
      txtContent: ''
    })
  }

  // 更新并获取文本框的值
  getTxtName(e) {
    // 如果要在 控制台 中查看 事件对象 中的属性，需要手动调用 e.persist()
    // 否则，看不到 e.target 等属性内容
    // e.persist()

    console.log(e)
    this.setState({
      txtName: e.target.value
    })
  }

  getTxtContent(e) {
    this.setState({
      txtContent: e.target.value
    })
  }

  render() {
    const { txtName, txtContent } = this.state
    console.log('render 方法执行了', txtName)
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
        {/* <button onClick={() => this.sendComment()}>发表评论</button> */}
        <button onClick={this.sendComment}>发表评论</button>
      </div>
    )
  }
}
