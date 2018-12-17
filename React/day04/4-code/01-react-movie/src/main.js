/* 
  react中的单向数据流：
    父组件可以通过props将数据传递给子组件，并且当父组件中的数据发生改变
    这个变化后的数据，也会自动的再流到子组件中，子组件中就接收到这个变化后的数据了。但是，反过来，子组件是无法直接修改props

  状态提升：将数据提升到父组件中，由父组件提供数据，由子组件使用这些数据
    常见的场景：两个子组件都是用到了一些数据，这些数据应该提升到父组件中。当一个组件修改了数据后，由于单向数据流的原因，这个改变后的数据，也会自动的流向到另外一个组件中

  组件通讯：
    父 -> 子： props
    子 -> 父：
      1 父组件提供一个方法
      2 将这个方法传递给子组件
      3 子组件通过props接收到方法，并且调用，将要传递的数据作为参数
    兄弟组件：
      1 将公共的数据提升到这两个组件的公共父组件中
      2 一个组件使用数据
      3 另外一个组件操作这些数据（比如：添加、修改 等）
  
  Context：
    提供了两个组件：1 Provider组件（提供者） 2 Consumer组件（消费者）
    <Provider value="red">
      ...
      <Consumer>{
        value => {
          return 子组件的JSX结构
        }
      }</Consumer>
      ...
    </Provider>

  props校验：
    1 安装： npm i -S prop-types
    2 导入包： import PropTypes from 'prop-types'
    3 给组件添加静态属性：
      static propTypes = {
        colors: PropTypes.array.isRequired
      }
  
  ref 操作DOM
    只有在必要的情况下，才使用 ref 进行DOM操作

    this.txtRef = React.createRef()
    <input ref={this.txtRef} />

    DidMount() {
      this.txtRef.current.focus()
    }
  
  非受控组件：
    this.txtRef = React.createRef()
    <input ref={this.txtRef} />
    获取文本框的值： this.txtRef.current.value
    
  受控组件：
    <input value={this.state.txt} onChange={(e) => this.setState({txt: e.target.value})} />
  
  组件中state的实践说明：
    state中的数据应该尽量的少，如果state中的数据很多，可能会影响到react组件渲染的性能
    只将页面中用到的数据放在state中，而其他一些需要在各个方法中公用的数据，可以直接添加给 this ，而不是添加给state
  
  react中路由的特点：
    1 当路由（哈希值）发生改变，页面中所有的 Route 都会全部重新匹配一次
      只要匹配成功了，那么，这个 Route 就会展示出来
    
    2 默认情况下，react路由采用模糊匹配，只要 to（/about） 中包含 path（/） 就可以匹配成功。
      可以通过给 Route 添加 exact 属性，来让 Route 变为精确匹配，也就是说：只有 to 和 path 完全相同，才会匹配成功
    
    3 一般如果 path="/" 那么这个 Route 都会添加 exact 属性！！！
*/

import React from 'react'
import ReactDOM from 'react-dom'

// const { Consumer } =  React.createContext()

import App from './App'

ReactDOM.render(<App />, document.getElementById('app'))
