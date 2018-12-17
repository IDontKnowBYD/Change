/* 
  JSX 的使用：
  
  JSX：JavaScript XML（HTML）
    在 JS 代码中，直接写 HTML 结构
  
  注意：
    如果要在 JS 中使用 JSX 语法，是需要经过 babel 转换后，才能使用的，否则会直接报错！！！
  
  使用babel处理JSX：
    1 安装：npm i -D babel-preset-react
      作用：用来解析 react 语法
    2 在 .babelrc 中添加 presets 配置项：
    {
      "presets": ["env", "stage-2", "react"]
    }
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 使用 JSX 语法：
const dv = <div>Hello JSX</div>

ReactDOM.render(dv, document.getElementById('app'))
