import React from 'react'
import ReactDOM from 'react-dom'

// 创建有状态组件：
class Hello extends React.Component {
  constructor() {
    super()

    // 绑定this的指向：
    // constructor中的 this 就是当前组件的实例对象
    this.handleClick = this.handleClick.bind(this)

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
        <button
          onClick={ this.handleClick  }
        >绑定事件</button>
      </div>
    )
  }

  handleClick(){
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

// JS中函数方法 bind 的用法：
// call / apply / bind 这三个方法都可以解决this指向的问题

// call / apply
var obj = {
  name: 'obj',
  fn() {
    console.log(this.name)
  }
}

// 原始调用：this 是obj
// obj.fn()

// this 是谁？？？ undefine（因为在严格模式下）
var foo = obj.fn
// foo()

// call 和 apply 都可以修改函数内部this的指向问题
// 特点：使用 call 或 apply 后，这个函数，会被立即调用！
// foo.call(obj)
// foo.apply(obj)

// bind方法的作用：
// 1 修改this指向
// 2 创建一个绑定好this指向的函数
var newFoo = foo.bind(obj)
newFoo()
