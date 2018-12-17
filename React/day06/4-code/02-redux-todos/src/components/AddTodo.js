import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ onAddTodo }) => {
  // 非受控组件
  const txtRef = React.createRef()

  return (
    <div>
      <input type="text" ref={txtRef} />
      <button
        onClick={() => {
          if (txtRef.current.value.trim() === '') {
            return
          }

          onAddTodo(txtRef.current.value.trim())
          txtRef.current.value = ''
        }}
      >
        添加
      </button>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {
    // todoName 参数：表示文本框的值
    onAddTodo(todoName) {
      dispatch(addTodo(todoName))
    }
  }
}

// connect方法的参数：
// 第一个参数：用来将 redux 中的state映射到组件中
// 第二个参数：用来将 操作state的方法 映射到组件中
const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default AddTodoContainer
