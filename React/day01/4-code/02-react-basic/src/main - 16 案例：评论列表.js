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

  /* 
    注意：使用 map 遍历元素生产JSX结构的时候，应该给每个被遍历的元素添加key属性
          key 属性不能重复
        添加key属性后，可以实现列表结构的高效更新
  */

  render() {
    return (
      <div>
        <h1>评论列表组件</h1>
        {/* <ul>{ [<li>1</li>, <li>2</li>] }</ul> */}
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                <h3>
                  评论人：
                  {item.user}
                </h3>
                <p>
                  评论内容：
                  {item.content}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<CommentList />, document.getElementById('app'))
