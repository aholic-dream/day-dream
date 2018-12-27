import React from 'react'
import TodoItem from './Item.jsx'
import { connect } from 'react-redux'
import { getVisibleTodos, toggleTodo } from '../../model/todo_action'
import PropTypes from 'prop-types'
import Style from './style/list.less'

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

const TodoList = ({ todos, toggleTodo }) => (
  <div>
    <div className={Style.list}>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            index={index}
            {...todo}
            onClick={() => {
              toggleTodo(todo.id)
            }}
          />
        )
      })}
    </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
