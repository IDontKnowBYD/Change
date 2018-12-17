/* 
  react 组件化开发：

  要解决的问题：react 如何创建组件？
  两种创建组件的方式：
  1 函数式组件
  2 class组件

  class 组件
*/


// ES6中 class 的用法：
// 在 ES6 之前如何实现面向对象？？？
// 通过 构造函数+原型 实现的面向对象
/* function Person () {
}
const p = new Person() */

// 创建 Person 类：
class Person {
  // constructor 即：构造函数
  constructor(name, age) {
    // 如何给实例对象添加属性???
    // 在 构造函数 中，通过  this.属性 = 值  这种形式来给实例对象添加属性
    // this.name = 'jack'
    // this.age = 18

    this.name = name
    this.age = age
  }

  // 如何给实例对象添加方法？？？
  // 给实例对象添加say方法
  say() {
    console.log('大家好，我是：', this.name, ', 我今年：', this.age, ' 岁了')
  }
}

// 创建实例对象的过程称为：实例化
// 创建Person类的实例对象：
// const p = new Person()
// console.log(p)

const p1 = new Person('rose', 16)
console.log(p1)
p1.say()
