import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ onClick, completed, name }) => {
  let isDone = String(completed)
  let el = <li
      onClick={onClick}
      style={ {
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {name} + {isDone}
    </li>
  return el
}

TodoItem.propTypes = {
  onClick: PropTypes.func,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default TodoItem