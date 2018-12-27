import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../model/todo_action'
import Input from '../../components/UI/Input/index.jsx'

const AddTodo = ({dispatch}) => {
  let input
  let clickForSubmit  = e => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }
  return (
    <form>
      <label id="addTodo">add todo</label>
      <Input placeholder="add todo" id="addTodo" refs={node => (input = node)}/>
      <button type="button" onClick={clickForSubmit}>submit</button>
    </form>
  )
}

export default connect()(AddTodo)