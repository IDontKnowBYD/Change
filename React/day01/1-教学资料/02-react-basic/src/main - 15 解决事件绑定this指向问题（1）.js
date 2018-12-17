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

        {/* 绑定事件：通过 on+事件名称，事件名称首字母大写 */}
        {/* 注意：绑定事件应该将方法的引用（this.handleClick）赋值给事件，而不应该把方法调用的结果（this.handleClick()）赋值为事件 */}
        {/* <button 
          onClick={ this.handleClick }
          >绑定事件</button> */}

        {/* 
          使用箭头函数处理this指向问题：
          1 箭头函数是没有 this
          2 箭头函数中的this，是由外部环境决定的
        */}
        <button
          onClick={
            () => { 
              // 此处的 this，也就是箭头函数中的this，是：外层环境（也就是render方法）中的this （也就是 当前组件的实例对象）
              this.handleClick() 
            } 
          }
        >绑定事件</button>
      </div>
    )
  }

  // 绑定事件的时候，需要注入事件中 this 指向的问题：
  // 如何处理 this 指向的问题？？？
  // 1 使用箭头函数
  // 2 使用 bind() 绑定this

  // 事件处理程序：
  handleClick() {
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