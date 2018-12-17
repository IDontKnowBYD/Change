/* 
  react 中的 props 校验

  目的： 保证使用组件的时候，不会出现与组件中要求数据类型不一致导致的问题

  props类型校验的使用步骤：
  1 安装：npm i -S prop-types
  2 导入 prop-types
  3 给要进行props校验的组件添加静态属性 propTypes
  4 在静态属性中，添加 props 校验
*/

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 导入类型校验
import PropTypes from 'prop-types'

class Parent extends Component {
  // 添加静态属性
  static propTypes = {
    // colors 表示要校验的props属性名称
    // PropTypes.array 表示当前props的类型为数组
    // isRequired 表示当前props必须传给组件
    colors: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <button>按钮</button>
        {this.props.colors.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    )
  }
}

ReactDOM.render(<Parent colors={[1]} />, document.getElementById('app'))
