import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../model/todo_action'
import Input from '../../components/UI/Input/index.jsx'
import {Button} from '../../components/UI/Button/index.js'
import Style from './style/AddTodo.less'

const AddTodo = ({ dispatch }) => {
  let input
  let clickForSubmit = e => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <form>
      <label id='addTodo' className={Style.label}>add todo：
      <Input
        placeholder='add todo'
        id='addTodo'
        ref={node => input = node.textInput.current}
      />
      </label>
      <Button onClick={clickForSubmit}>
        Submit
      </Button>
    </form>
  )
}

export default connect()(AddTodo)
