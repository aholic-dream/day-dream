import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../model/todo_action'

const AddTodo = ({dispatch}) => {
  let input
  return (
    <form>
      <label id="addTodo">add todo</label>
      <input type="text" id="addTodo" ref={node => (input = node)}/>
      <button type="button" onClick= {e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>submit</button>
    </form>
  )
}

export default connect()(AddTodo)