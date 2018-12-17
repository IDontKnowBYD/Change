import React from 'react'
import ReactDOM from 'react-dom'

// 样式
/* const styles = {
  dv: {
    color: 'red'
  },
  span: {
    color: 'green'
  }
}

import './css/index.css'

const dv = (
  <div style={styles.dv} className="container">
    这是 react 元素
    <span style={styles.span}>这是span</span>
  </div>
)

ReactDOM.render(dv, document.getElementById('app'))
 */

/* // props.children 用来获取组件的子节点
const Hello = props => {
  console.log(props)
  return <div>这是 Hello 组件 - {props.children}</div>
}

ReactDOM.render(
  <Hello name="rose">
    子节点 <span>span</span>
  </Hello>,
  document.getElementById('app')
)
 */

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log('事件对象：', e)
    // console.log(this)
    this.setState({
      count: this.state.count + 1
    })
  }

  /* handleClick = e => {
    console.log('事件对象：', e)
    // console.log(this)
    this.setState({
      count: this.state.count + 1
    })
  } */

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>按钮</button>

        {/* <button onClick={this.handleClick}>按钮</button> */}

        {/* <button
          onClick={e => {
            this.handleClick(e)
          }}
        >
          按钮
        </button> */}
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
