/* 
  评论列表组件

  1 先使用一个组件来实现整个功能
  2 再拆分成多个组件来实现这个功能
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 创建组件
class CommentList extends React.Component {
  state = {
    // 初始化评论列表数据
    list: [
      { id: 1, user: '张三', content: '哈哈，沙发' },
      { id: 2, user: '张三2', content: '哈哈，板凳' },
      { id: 3, user: '张三3', content: '哈哈，凉席' },
      { id: 4, user: '张三4', content: '哈哈，砖头' },
      { id: 5, user: '张三5', content: '哈哈，楼下山炮' }
    ]
  }

  render() {
    return (
      <div>
        <h1>评论列表组件</h1>
        <ul>
          {/* <CommentItem user="rose" content="我在这呢" /> */}
          {this.state.list.map(item => {
            return (
              <CommentItem
                key={item.id}
                user={item.user}
                content={item.content}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

// 创建子组件
function CommentItem(props) {
  return (
    <li>
      <h3>
        评论人：
        {props.user}
      </h3>
      <p>
        评论内容：
        {props.content}
      </p>
    </li>
  )
}

ReactDOM.render(<CommentList />, document.getElementById('app'))
