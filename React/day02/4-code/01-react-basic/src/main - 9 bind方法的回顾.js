/* 
  react 事件处理程序中 this 指向的问题：
    1 默认情况下，事件处理程序中的 this 是 undefined
    2 我们希望事件处理程序中的this指向当前组件的实例对象。
      render 方法中的this，就是当前组件的实例对象！！！

  两种处理this指向的方式：
    1 箭头函数
    2 bind() 方法改变this指向
*/

// JS 中的 bind 方法

// 在 JS 中，有三个方法可以修改函数中 this 的指向：
// 1 call
// 2 apply
// 3 bind

// 使用 call/apply 两个方法，调用的方法都会被直接调用
function fn() {
  console.log('函数fn中的this：', this)
}

const obj = {
  name: '对象obj'
}

// call/apply 方法的两个作用：
// 1 调用 fn 方法
// 2 让 fn 中的this指向 obj
// fn.call(obj)
// fn.apply(obj)

// bind 方法的特点：
// 1 不会直接调用该方法，而是返回一个新的方法
// 2 新返回函数 newFn 中的this，已经与参数 obj 绑定到一起了
// 3 bind方法返回的函数中this无法再次改变
const newFn = fn.bind(obj)
newFn()

// 无法再次修改 newFn 中this的指向
// newFn.apply({ name: '新的对象' })
