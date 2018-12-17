/* 
  antd 组件库的基本使用：

  1 安装：npm i -S antd
  2 导入组件库
  2.1 导入样式
  3 渲染导入的组件
*/

import React from 'react'
import ReactDOM from 'react-dom'

// 导入组件库
import { DatePicker } from 'antd'

// 导入样式
import 'antd/dist/antd.css'

// 渲染
ReactDOM.render(<DatePicker />, document.getElementById('app'))
