import React from 'react'
import TodoItem from './Item.jsx'
import {connect} from 'react-redux'
import {getVisibleTodos, toggleTodo} from '../../model/todo_action'
import PropTypes from 'prop-types'

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})


const TodoList = ({todos, toggleTodo}) => (
  <div>
    <ol>
      {todos.map(todo => {
        return <TodoItem key={todo.id} {...todo} onClick={() => {toggleTodo(todo.id)}} />
      })}
    </ol>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)