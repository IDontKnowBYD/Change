# react 生命周期

## 组件的生命周期

![React中组件的生命周期](./images/组件的生命周期.png)

- 简单说：**一个组件从开始到最后消亡所经历的各种状态，就是一个组件的生命周期**

组件生命周期函数的定义：从组件被创建，到组件挂载到页面上运行，再到页面关闭组件被卸载，这三个阶段总是伴随着组件各种各样的事件，那么这些事件，统称为组件的生命周期函数！

- 通过这个函数，能够让开发人员的代码，参与到组件的生命周期中。也就是说，通过钩子函数，就可以控制组件的行为

- [react component](https://react.docschina.org/docs/react-component.html)
- [React Native 中组件的生命周期](http://www.race604.com/react-native-component-lifecycle/)
- [React 生命周期的管理艺术](https://zhuanlan.zhihu.com/p/20312691?refer=purerender)
- [智能组件和木偶组件](http://www.jianshu.com/p/9e427e04135e)

### 组件生命周期函数总览

- 说明：通过 `Counter计数器的小案例`，理解组件的生命周期函数基本使用
- 组件的生命周期包含三个阶段：创建阶段（Mounting）、运行和交互阶段（Updating）、卸载阶段（Unmounting）

![React生命周期表格](./images/生命周期明细表格.png)

- Mounting：

  > constructor()  
  > componentWillMount()  
  > render()  
  > componentDidMount()

- Updating

  > componentWillReceiveProps()  
  > shouldComponentUpdate()  
  > componentWillUpdate()  
  > render()  
  > componentDidUpdate()

- Unmounting
  > componentWillUnmount()

### 组件生命周期 - 创建阶段(Mounting)

- 特点：该阶段的函数只执行一次

#### constructor()

- 作用：1 获取 props 2 初始化 state
- 说明：通过 `constructor()` 的参数`props`获取
- [设置 state 和 props](https://react.docschina.org/docs/react-without-es6.html)

```js
class Greeting extends React.Component {
  constructor(props) {
    // 获取 props
    super(props)
    // 初始化 state
    this.state = {
      count: props.initCount
    }
  }
}

// 初始化 props
// 语法：通过静态属性 defaultProps 来初始化props
Greeting.defaultProps = {
  initCount: 0
}
```

#### componentWillMount()

- 说明：组件被挂载到页面之前调用，其在 render()之前被调用，因此在这方法里`同步`地设置状态将不会触发重渲染
- 说明：1 可以调用 `setState()` 方法来改变状态值
- 注意：2 无法获取页面中的 DOM 对象

```js
componentWillMount() {
  console.warn(document.getElementById('btn')) // null
  this.setState({
    count: this.state.count + 1
  })
}
```

#### render()

- 作用：渲染组件到页面中，无法获取页面中的 DOM 对象
- 注意：**不要在 render 方法中调用 `setState()` 方法，否则会递归渲染**
  - 原因说明：状态改变会重新调用`render()`，`render()`又重新改变状态

```js
render() {
  console.warn(document.getElementById('btn')) // null

  return (
    <div>
      <button id="btn" onClick={this.handleAdd}>打豆豆一次</button>
      {
        this.state.count === 4
        ? null
        : <CounterChild initCount={this.state.count}></CounterChild>
      }
    </div>
  )
}
```

#### componentDidMount()

- 1 组件已经挂载到页面中
- 2 可以进行 DOM 操作，比如：获取到组件内部的 DOM 对象
- 3 可以**发送请求**获取数据
- 4 可以通过 `setState()` 修改状态的值
- 注意：在该方法里设置状态将会触发重渲

```js
componentDidMount() {
  // 此时，就可以获取到组件内部的DOM对象
  console.warn('componentDidMount', document.getElementById('btn'))
}
```

### 组件生命周期 - 运行阶段（Updating）

- 特点：该阶段的函数执行多次
- 说明：每当组件的`props`或者`state`改变的时候，都会触发运行阶段的函数

#### componentWillReceiveProps()

- 说明：组件接受到新的`props`前触发这个方法
- 参数：当前组件`props`值
- 可以通过 `this.props` 获取到上一次的值
- 使用：若你需要响应属性的改变，可以通过对比`this.props`和`nextProps`并在该方法中使用`this.setState()`处理状态改变
- 注意：修改`state`不会触发该方法

```js
componentWillReceiveProps(nextProps) {
  console.warn('componentWillReceiveProps', nextProps)
}
```

#### shouldComponentUpdate()

- 作用：根据这个方法的返回值决定是否重新渲染组件，返回`true`重新渲染，否则不渲染
- 优势：通过某个条件渲染组件，降低组件渲染频率，提升组件性能
- 说明：如果返回值为`false`，那么，后续`render()`方法不会被调用
- 注意：**这个方法必须返回布尔值！！！**
- 参数：
  - 第一个参数：最新属性对象
  - 第二个参数：最新状态对象
- 场景：根据随机数决定是否渲染组件

```js
shouldComponentUpdate(nextProps, nextState) {
  console.warn('shouldComponentUpdate', nextProps, nextState)

  return nextState.count % 2 === 0
}
```

#### componentWillUpdate()

- 作用：组件将要更新
- 参数：最新的属性和状态对象

```js
componentWillUpdate(nextProps, nextState) {
  console.warn('componentWillUpdate', nextProps, nextState)
}
```

#### render() 渲染

- 作用：重新渲染组件，与`Mounting`阶段的`render`是同一个函数
- 注意：这个函数能够执行多次，只要组件的属性或状态改变了，这个方法就会重新执行

#### componentDidUpdate()

- 作用：组件已经被更新
- 参数：旧的属性和状态对象

```js
componentDidUpdate(prevProps, prevState) {
  console.warn('componentDidUpdate', prevProps, prevState)
}
```

### 组件生命周期 - 卸载阶段（Unmounting）

- 组件销毁阶段：组件卸载期间，函数比较单一，只有一个函数，这个函数也有一个显著的特点：组件一辈子只能执行依次！
- 使用说明：只要组件不再被渲染到页面中，那么这个方法就会被调用（ 渲染到页面中 -> 不再渲染到页面中 ）

#### componentWillUnmount()

- 作用：在卸载组件的时候，执行清理工作，比如
  - 1 清除定时器
  - 2 清除`componentDidMount`创建的 DOM 对象

---

## React - createReactClass（知道）

- **`React.createClass({})` 方式，创建有状态组件，该方式已经被废弃！！！**
- 通过导入 `require('create-react-class')`，可以在不适用 ES6 的情况下，创建有状态组件
- getDefaultProps() 和 getInitialState() 方法：是 `createReactClass()` 方式创建组件中的两个函数
- [React without ES6](https://reactjs.org/docs/react-without-es6.html#declaring-default-props)
- [React 不使用 ES6](https://react.docschina.org/docs/react-without-es6.html)

```js
var createReactClass = require('create-react-class')

// 调用该方法，创建一个有状态组件：
var Greeting = createReactClass({
  // 初始化 props
  getDefaultProps: function() {
    console.log('getDefaultProps')
    return {
      title: 'Basic counter!!!'
    }
  },

  // 初始化 state
  getInitialState: function() {
    console.log('getInitialState')
    return {
      count: 0
    }
  },

  render: function() {
    console.log('render')
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.state.count}</div>
        <input type="button" value="+" onClick={this.handleIncrement} />
      </div>
    )
  },

  handleIncrement: function() {
    var newCount = this.state.count + 1
    this.setState({ count: newCount })
  },

  propTypes: {
    title: React.PropTypes.string
  }
})

ReactDOM.render(<Greeting />, document.getElementById('app'))
```

## state 和 setState

- 注意：使用 `setState()` 方法修改状态，状态改变后，React 会重新渲染组件
- 注意：不要直接修改 state 属性的值，这样不会重新渲染组件！！！
- 使用：1 初始化 state 2 setState 修改 state

```js
// 修改state（不推荐使用）
// https://react.docschina.org/docs/state-and-lifecycle.html#不要直接更新状态
this.state.test = '这样方式，不会重新渲染组件'
```

```js
constructor(props) {
  super(props)

  // 正确姿势！！！
  // -------------- 初始化 state --------------
  this.state = {
    count: props.initCount
  }
}

componentWillMount() {
  // -------------- 修改 state 的值 --------------
  // 方式一：
  this.setState({
    count: this.state.count + 1
  })

  this.setState({
    count: this.state.count + 1
  }, function(){
    // 由于 setState() 是异步操作，所以，如果想立即获取修改后的state
    // 需要在回调函数中获取
    // https://react.docschina.org/docs/react-component.html#setstate
  })

  // 方式二：
  this.setState(function(prevState, props) {
    return {
      counter: prevState.counter + props.increment
    }
  })

  // 或者 - 注意： => 后面需要带有小括号，因为返回的是一个对象
  this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
  }))
}
```

## 组件绑定事件

- 1 通过 React 事件机制 `onClick` 绑定
- 2 JS 原生方式绑定（通过 `ref` 获取元素）
  - 注意：`ref` 是 React 提供的一个特殊属性
  - `ref`的使用说明：[react ref](https://reactjscn.com/docs/refs-and-the-dom.html)

### React 中的事件机制 - 推荐

- 注意：事件名称采用驼峰命名法
- 例如：`onClick` 用来绑定单击事件

```js
<input
  type="button"
  value="触发单击事件"
  onClick={this.handleCountAdd}
  onMouseEnter={this.handleMouseEnter}
/>
```

### JS 原生方式 - 知道即可

- 说明：给元素添加 `ref` 属性，然后，获取元素绑定事件

```js
// JSX
// 将当前DOM的引用赋值给 this.txtInput 属性
<input ref={ input => this.txtInput = input } type="button" value="我是豆豆" />

componentDidMount() {
  // 通过 this.txtInput 属性获取元素绑定事件
  this.txtInput.addEventListener(() => {
    this.setState({
      count:this.state.count + 1
    })
  })
}
```

## 事件绑定中的 this

- 1 通过 `bind` 绑定
- 2 通过 `箭头函数` 绑定

### 通过 bind 绑定

- 原理：`bind`能够调用函数，改变函数内部 this 的指向，并返回一个新函数
- 说明：`bind`第一个参数为返回函数中 this 的指向，后面的参数为传给返回函数的参数

```js
// 自定义方法：
handleBtnClick(arg1, arg2) {
  this.setState({
    msg: '点击事件修改state的值' + arg1 + arg2
  })
}

render() {
  return (
    <div>
      <button onClick={
        // 无参数
        // this.handleBtnClick.bind(this)

        // 有参数
        this.handleBtnClick.bind(this, 'abc', [1, 2])
      }>事件中this的处理</button>
      <h1>{this.state.msg}</h1>
    </div>
  )
}
```

- 在构造函数中使用`bind`

```js
constructor() {
  super()

  this.handleBtnClick = this.handleBtnClick.bind(this)
}

// render() 方法中：
<button onClick={ this.handleBtnClick }>事件中this的处理</button>
```

### 通过箭头函数绑定

- 原理：`箭头函数`中的 this 由所处的环境决定，自身不绑定 this

```js
<input type="button" value="在构造函数中绑定this并传参" onClick={
  () => { this.handleBtnClick('参数1', '参数2') }
} />

handleBtnClick(arg1, arg2) {
  this.setState({
    msg: '在构造函数中绑定this并传参' + arg1 + arg2
  })
}
```

## 受控组件

- [表单和受控组件](https://react.docschina.org/docs/forms.html)
- [非受控组件](https://react.docschina.org/docs/uncontrolled-components.html)
- [浅析 React 中的受控组件和非受控组件](http://blog.csdn.net/fengxiaoxiao_1/article/details/78128386)

> 在 React 中，可变的状态通常保存在组件的`state`中，并且只能用 `setState()` 方法进行更新.  
> 我们通过使 react 变成一种单一数据源的状态来结合二者。
> React 负责渲染表单的组件仍然控制用户后续输入时所发生的变化。相应的，其值由 React 控制的输入表单元素称为“受控组件”。

- 在 React 应用中，任何可变数据应该只有一个：“单一数据源”
- 注意：**只能通过 setState 来设置受控组件的值**

```js
// 模拟实现文本框数据的双向绑定
;<input type="text" value={this.state.msg} onChange={this.handleTextChange} />

// 当文本框内容改变的时候，触发这个事件，重新给state赋值
handleTextChange = event => {
  console.log(event.target.value)

  this.setState({
    msg: event.target.value
  })
}
```

## 评论列表案例

```js
;[
  { name: '小明', content: '沙发！！！' },
  { name: '小红', content: '小明，居然是你' },
  { name: '小刚', content: '小明，放学你别走！！！' }
]
```

## props 校验

- 作用：通过类型检查，提高程序的稳定性
- 命令：`npm i -S prop-types`
- [类型校验文档](https://react.docschina.org/docs/typechecking-with-proptypes.html)
- 使用：给类提供一个静态属性 `propTypes`（对象），来约束`props`

```js
// 引入模块
import PropTypes from 'prop-types'

// ...以下代码是类的静态属性：
// propTypes 静态属性的名称是固定的！！！
static propTypes = {
  initCount: PropTypes.number, // 规定属性的类型
  initAge: PropTypes.number.isRequired // 规定属性的类型，且规定为必传字段
}
```

## React 单向数据流 和 状态提升

- [单向数据流](https://react.docschina.org/docs/state-and-lifecycle.html#the-data-flows-down)
- [状态提升](https://react.docschina.org/docs/lifting-state-up.html)

- 主要思想是：组件不能修改接收的数据
- 父组件中的数据改变了，子组件就会接受到新的数据。但是反过来，子组件不能修改接收到的 props 数据。因此，数据流动方向是：父组件 -> 子组件

- 状态提升：在 React 中，状态分享是通过将 state 提升至离需要这些数据的组件最近的父组件来完成的，这就是所谓的状态提升
- 开发模式：父组件提供数据（状态），子组件从父组件中获取数据，并进行展示处理

### 组件通讯

- 父 -> 子：`props`
- 子 -> 父：父组件通过 props 传递回调函数给子组件，子组件调用函数将数据作为参数传递给父组件
- 兄弟组件：因为 React 是单向数据流，因此需要借助父组件进行传递，通过父组件回调函数改变兄弟组件的 props

- React 中的状态管理： flux（提出状态管理的思想）/ Redux 推荐 / Mobx / ...
- Vue 中的状态管理： Vuex
- 简单来说，就是统一管理了项目中所有的数据，让数据变的可控

vue 技术栈：vue + vue-router + vuex + axios
react 技术栈：react + react 路由 + redux + axios/fetch

- [组件通讯](https://segmentfault.com/a/1190000006831820)

### Context 特性

- 注意：**如果不熟悉 React 中的数据流，不推荐使用这个属性**
- 作用：共享全局数据，实现组件之间的数据共享，而不必通过组件树的每个层级显式地传递 props
- [文档](https://react.docschina.org/docs/context.html)

```js
// 创建一个 theme Context,  默认 theme 的值为 light
const ThemeContext = React.createContext('green')

function Child(props) {
  // Child 组件从 context 接收 theme
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button {...props} style={{ color: theme }}>
          颜色主题 {theme}
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

// 中间组件
function Father(props) {
  return (
    <div>
      <Child />
    </div>
  )
}

class Grandfather extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="red">
        <Father />
      </ThemeContext.Provider>
    )
  }
}
```
