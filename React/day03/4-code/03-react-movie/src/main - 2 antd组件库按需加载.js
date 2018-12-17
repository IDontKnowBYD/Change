/* 
  antd 组件库的按需加载方式：

  1 安装：npm i -S antd
  2 导入要使用的组件
  3 安装babel插件，实现按需加载：npm i -D babel-plugin-import
  4 在 .babelrc 文件中添加 按需加载 的配置
    {
      "plugins": [
        ["import", {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css" // `style: true` 会加载 less 文件
        }]
      ]
    }
  5 渲染导入的组件
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 导入组件库
import { DatePicker } from 'antd'

// 渲染
ReactDOM.render(<DatePicker />, document.getElementById('app'))
