// 继承:
//  前提条件: 起码要有两个类, 才能实现继承
//  继承的目的: 可以将一些公共的方法放到父类中, 子类通过继承父类, 就可以使用这些属性或方法了

// Person 类
class Person {
  constructor(name) {
    // this.name = 'jack'
    this.name = name
  }

  say() {
    console.log('您好,我是: ', this.name)
  }
}

// Chinese 类
// 通过 extends 语法实现两个类的继承
// 作用: Chinese 继承自 Person 类
class Chinese extends Person {
  constructor(name, age) {
    // 错误的演示!!! this 不能在 super() 前调用
    // this.age = 19
    // this.name = '小明1'

    // 注意: 只要在子类中写了 constructor , 就必须手动调用 super() 方法!!!
    // super() 指的是 父类的构造函数, 也就是 Person 中 constructor()!!!
    super(name)

    // 注意: this 必须是在 super() 调用后!!!!
    // this.name = '小明'

    this.age = age
  }

  say() {
    console.log('hello, i am ', this.name)
  }
}

// const c = new Chinese()
// console.log(c)
// c.say()

const c1 = new Chinese('小刚', 19)
console.log(c1)

