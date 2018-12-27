import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../model/todo_action'
import Input from '@c/UI/Input'
import {Button} from '@c/UI/Button'
import Style from './style/AddTodo.less'

const AddTodo = ({ dispatch }) => {
  let input
  let clickForSubmit = e => {
    e.preventDefault()
    let dom_input = input.domInput
    if (!dom_input.value.trim()) {
      return
    }
    dispatch(addTodo(dom_input.value))
    dom_input.value = ''
  }

  return (
    <form>
      <label id='addTodo' className={Style.label}>add todo：
      <Input
        placeholder='add todo'
        id='addTodo'
        ref={node => input = node}
      />
      </label>
      <Button onClick={clickForSubmit}>
        Submit
      </Button>
    </form>
  )
}

export default connect()(AddTodo)
