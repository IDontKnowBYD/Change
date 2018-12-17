import React from 'react'
import ReactDOM from 'react-dom'

// 创建有状态组件：
class Hello extends React.Component {
  constructor() {
    super()

    this.state = {
      msg: '默认值'
    }
  }

  render() {
    // 说明：render方法中的this表示当前组件的实例对象，这个this是可以调用 setState() 方法的！！！
    // console.log(this)

    return (
      <div>
        <h1>这是标题 -- {this.state.msg}</h1>
        {/* 
          使用箭头函数处理this指向问题：
          1 箭头函数是没有 this
          2 箭头函数中的this，是由外部环境决定的
        */}
        <button
          onClick={ this.handleClick  }
        >绑定事件</button>
      </div>
    )
  }

  // 原理：当前方法本来就是一个箭头函数，那么，也可以直接解决this指向的问题
  // 注意：这种形式不是标准的JS语法，需要通过 stage-2 才能解析这个语法！！！
  handleClick = () => {
    console.log('单击事件触发了', this)

    this.setState({
      msg: '修改'
    })
  }
}

// 渲染组件
ReactDOM.render(
  <Hello />,
  document.getElementById('app')
)