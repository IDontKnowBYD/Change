/* 
  react 组件生命周期钩子函数

  注意：只有class组件才有生命周期，函数组件没有生命周期
  
  整个生命周期分为三个阶段：
    1 挂载阶段（Mounting）   ：在进入页面（或组件渲染）
    2 更新阶段（Updating）   ：组件中的state发生改变 或者 组件接收到新的props
    3 卸载阶段（Unmounting） ：组件从页面中消失掉，不再展示在页面中了
*/

import React from 'react'
import ReactDOM from 'react-dom'

class Dadoudou extends React.Component {
  render() {
    return (
      <div>
        <h1>
          统计豆豆被打的次数：
          {this.props.initCount}
        </h1>
        <button>打豆豆</button>
      </div>
    )
  }

  // 静态属性：是通过 static 关键字来声明的
  // defaultProps 作用：给props设置默认值
  // 如果在使用组件的时候，没有传递 props，就使用该默认值
  // 如果在使用组件的时候，传递了 props，那么，就使用传递进来的props
  static defaultProps = {
    initCount: 0
  }
}

// 不使用ES6中的 static 关键字，可以通过给 类名直接添加属性的方式来添加一个静态属性
// Dadoudou.defaultProps = {
//   initCount: 0
// }

ReactDOM.render(<Dadoudou initCount={2} />, document.getElementById('app'))
