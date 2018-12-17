# Redux

![redux logo](./images/redux.png)

- [react-redux 流程与实现分析](http://www.jianshu.com/p/507d9da0afe7)
- [《看漫画，学 Redux》 —— A cartoon intro to Redux](https://github.com/jasonslyvia/a-cartoon-intro-to-redux-cn)
- [Redux 中文网](http://www.redux.org.cn/docs/basics/ExampleTodoList.html)
- [React 实践心得：react-redux 之 connect 方法详解](http://taobaofed.org/blog/2016/08/18/react-redux-connect/)
- [解读 redux 工作原理](http://zhenhua-lee.github.io/react/redux.html)

## 起源

```html
React 只是 DOM 的一个抽象层，并不是 Web 应用的完整解决方案。有两个方面，它没涉及
1 代码结构
2 组件之间的通信

对于大型的复杂应用来说，这两方面恰恰是最关键的。因此，只用 React 没法写大型应用。

2014年 Facebook 提出了 Flux 架构的概念，引发了很多的实现。
2015年，Redux 出现，将 Flux 与函数式编程结合一起，很短时间内就成为了最热门的前端架构。

Flux 是最早的 状态管理 工具，它提供了状态管理的思想，也提供对应的实现
除了 Flux、Redux 之外，还有：Mobx 等状态管理工具
```

- 注意：**如果你不知道是否需要 Redux，那就是不需要它。只有遇到 React 实在解决不了的问题，你才需要 Redux**

## 特点

- 1 提供可预测的状态管理
- 2 通过开发者工具，提供：代码热替换（hot reload）和时间旅行（time travel）功能
- 3 提供中间件机制

```html
state 变化的过程：

子 reducers 会把他们创建的副本传回给根 reducer，而根 reducer 会把这些副本组合起来形成一颗新的状态树。最后根 reducer 将新的状态树传回给 store，store 再将新的状态树设为最终的状态。
```

## react 项目技术栈

- react
- react-router（react-router-dom）
- 状态：mobx （简单）/ redux（复杂）

- dva：集成了 react/react-router/redux 让 react 开发大型项目变的更加简单
  - [dva](https://github.com/dvajs/dva/blob/master/README_zh-CN.md)
- [react 技术栈](https://www.cnblogs.com/ruoji/p/6464131.html)

## 使用

- 安装：`npm i -S redux`

## 原则和理念

- 1 单一数据源
- 2 State 是只读的
- 3 使用纯函数来执行修改
- 解释：不要直接修改状态，而是返回一个新的状态

```js
// 比如，
state = {
  list: [1, 2, 3]
}

// 错误做法：
state.list.push(4)
return state

// 正确做法
return [...state.list, 4]
```

## 理解三个核心概念

- 核心概念：`store`、`action`、`reducer`
  - `store`：管理者，管理 action 和 reducer
  - `action`：“砖家”，只提想法不干活
  - `reducer`：劳动者，搬砖的人

```html
角色扮演：
  妈妈 ===> store
  孩子 ===> action
  爸爸 ===> reducer

场景：孩子饿了要吃饭

孩子要吃饭： 吃饭这是一个动作
  说明：孩子是“专家”，提出了吃饭的想法，但是，孩子自己不会吃饭

爸爸喂孩子吃饭： 喂孩子吃饭，是吃饭这个动作的具体响应
  说明：爸爸是劳动者，但是比较笨，不会主动喂孩子吃饭

妈妈让爸爸喂孩子吃饭
 说明：妈妈是管理者，妈妈把孩子饿了这事告诉爸爸，爸爸知道孩子饿了后，就会喂孩子吃饭

更多：孩子尿床了换尿布
```

## Action

- action 是行为的抽象，视图中的每个用户交互都是一个 action
  - 比如：添加任务、删除任务、登录、加入购物车 等
- 作用一：定义应用中可以执行的动作（或操作）的类型（type）
- 作用二：提供并传递 要改变的状态
- 使用方式：通过 store.dispatch() 将 action 传到 store

```html
注意点：

1 类型：JS对象
2 要求：必须有type属性（string），表示要执行的动作，使用全大写字母表示可以带有_
3 如果这个交互动作使用数据，应该提供使用的数据
4 一般由方法生成

进阶：
5 当应用规模越来越大时，type 会被定义成字符串常量。建议使用单独的模块或文件来存放 action
  一般会定义名称为：actionTypes.js的文件，用来存储所有 action 的名称
```

```js
// action 示例：
{
  type: 'ADD_TODO',
  text: 'Build my first Redux app'
}

// 使用action创建函数：（添加任务）
const addTodo = (text) => ({
  type: 'ADD_TODO',
  text
})
addTodo('Build my first Redux app') // {type: '', text: ''}

// 无参数：（值加1）
const increment = () => ({
  type: 'INCREMENT'
})
increment() // { type: '' }
```

## reducer

- reducer 是行为响应的抽象，也就是：根据 action，执行相应的逻辑操作，返回最新的 state
- 代码解释：`(previousState, action) => newState`
- 根据应用现有状态和触发的 action 返回`新状态`的函数称为 reducer
- 注意：**不要直接修改 state，应该返回一个新 state**，保证数据的不可变性（immutability）

```html
注意点：

1 纯函数（输入决定输出） - 不要直接修改state
2 传入旧状态和action
3 返回新状态

进阶：
4 每个 reducer 只负责管理应用全部 state 中，它负责的一部分（职责单一）
5 随着应用的膨胀，需要对 reducer 函数 进行拆分，拆分后的每一块独立负责管理 state 的一部分
```

```js
// 处理ADD_TODO动作的reducer：

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // 返回新的state
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
  }
}
```

### combineReducers

- 作用：把一个由不同 reducer 函数作为值的对象，合并成一个根 reducer 函数
- 说明：合并 reducer 会影响 redux 中 state 的结构 => state 结构与该方法对象参数结构相同
- 说明：合并后的 reducer 可以调用各个子 reducer，并把它们的结果合并成一个 state 对象。state 对象的结构由传入的多个 reducer 的 key 决定。
- [combineReducers 解释](https://blog.csdn.net/woshizisezise/article/details/51142968)

```js
// 使用 combineReducers 合并多个reducer：

import { combineReducers } from 'redux'

function todos(state = [], action) {}
function visibilityFilter(state = 'SHOW_ALL', action) {}

// 合并两个reducer：
// todos 和 visibilityFilter 的state 会被合并为一个 state对象
// 说明：最终的 state 中包含两个属性 => { todos, visibilityFilter }，与对象参数结构相同
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

// 导出根reducer
export default todoApp
```

```js
// combineReducers() 函数做了什么？
// 合并后的 reducer 可以调用各个子 reducer，并把它们返回的结果合并成一个 state 对象。 由 combineReducers() 返回的 state 对象，会将传入的每个 reducer 返回的 state 按其传递给 combineReducers() 时对应的 key 进行命名

// 说明：第一次初始化state以及每次state改变，都要遍历所有的 reducer，分别查看每个reducer中的state有没有改变，如果变了，就使用新的state
```

### reducer 纯函数的说明

- 特点：只要是同样的输入，必定得到同样的输出
- 原则：（一定要遵守！！！）

  - 不得改写参数
  - 不能调用 Date.now()或者 Math.random()等不纯的方法，因为每次会得到不一样的结果
  - 不能调用系统 I/O 的 API

- 1 reducer 必须是一个纯函数
- 2 纯函数主要的含义就是它不可以修改影响输入值
- 3 没有副作用，副作用指的是例如函数中一些异步调用或者会影响函数作用域之外的变量一类的操作

## store

- 一个应用应该只有一个 store
- store 负责将 action 和 reducer 关联在一起
- store 的作用：维持应用的 state

```js
// 根据reducer创建 store：

import { createStore } from 'redux'
import todoApp from './reducers'

// 根据 reducers 创建store
let store = createStore(todoApp)

// 获取state：
store.getState()

// 1 注册监听器：
// 2 返回注销该监听器的函数
// 说明：每次 state 更新时，都会执行该回调函数打印日志
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// 1 更新 state：
// 2 调用所有已经注册的监听器函数，比如：上面打印日志监听器
store.dispatch(addTodo('Learn about store'))

// 注销监听器：
unsubscribe()
```

## 搭配 react

- 安装：`npm i -S react-redux`

```html
react-redux 规定，所有的 UI组件 都由用户提供，容器组件则是由 react-redux 自动生成。也就是说，用户负责视觉层，状态管理则是全部交给它。
```

### `connect()`方法

- [react-redux](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)
- 作用：用于从 UI 组件 生成 容器组件。connect 的意思，就是将这两种组件连起来。

```html
connect的理解：其实就相当于connect在获取了Redux的store之后，再根据我们传入的方法，把我们需要的部分对应到props属性中，再传递到我们的组件当中
```

```js
// 将 UI组件 转换成 容器组件：

import { connect } from 'react-redux'

// TodoList是 UI 组件
// TodoListContainer就是由 react-redux 通过connect方法自动生成的容器组件
// 说明：因为没有定义业务逻辑，这个容器组件毫无意义，只是 UI 组件的一个单纯的包装层
const TodoListContainer = connect()(TodoList)
```

- 为了定义业务逻辑，需要给出下面两方面的信息：

```html
（1）输入逻辑：redux中的state对象（数据），如何在 UI组件 中使用
（2）输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去
```

```js
import { connect } from 'react-redux'

// 示例 - 映射state
const mapStateToProps = state => ({
  count: state
})
// 示例 - 映射dispatch
const mapDispatchToProps = dispatch => ({
  handleIncreament: () => {
    dispatch(increament(3))
  },
  handleDecreament: () => {
    dispatch(decreament(1))
  }
})

// connect方法的功能有以下两点：
// 1、包装原组件，将state和action通过props的方式传入到原组件内部
// 2、监听 store 中state的变化，使其包装的原组件可以响应state变化，实现更新

// 说明：通过 connect() 创建的组件，在mount的时候就注册监听器，当通过 dispatch 修改状态的时候，会触发这个监听器。监听器中调用 setState() 触发了组件更新（内部有相关的优化机制提升性能）
const VisibleTodoList = connect(
  // 建立从（外部的）state对象到（UI 组件的）props的映射关系
  mapStateToProps,
  // 用来建立 UI 组件的参数到store.dispatch方法的映射
  // 定义了 UI 组件的参数怎样发出 Action
  mapDispatchToProps
)(TodoList)
```

### Provider 组件

- 作用：Provider 的唯一功能就是传入 store 对象，让容器组件（中的所有组件）可以使用 store 中的 state

```js
let store = createStore(todoApp)

// Provider组件，可以让容器组件拿到state
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```
