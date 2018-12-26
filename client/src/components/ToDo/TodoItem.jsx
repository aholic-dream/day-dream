import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ onClick, completed, text,id }) => {
  let isDone = String(completed)
  let el = <li
      onClick={onClick}
      style={ {
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
    {id} + {text} + {isDone}
    </li>
  return el
}

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem