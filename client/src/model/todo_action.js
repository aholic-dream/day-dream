import * as Types from './todo_types'

let nextTodoId = 0

export const addTodo = text => ({
  type: Types.ADD_TODO,
  id: nextTodoId++,
  text
})
export const changeTodoContext = ({ text, id }) => ({
  type: Types.CHANGE_CONTENT_TODO,
  id,
  text
})
export const toggleTodo = id => ({
  type: Types.TOGGLE_TODO,
  id
})
export const deleTodo = id => ({
  type: Types.DELE_TODO,
  id
})



export const setVisibilityFilter = (filter) => ({
  filter,
  type: Types.SET_VISILIBILITY_FILTER
})

export function getVisibleTodos (todos, filter) {
  switch (filter) {
    case Types.SHOW_COMPLETED:
      return todos.filter(todo => todo.complete)

    case Types.SHOW_ACTIVE:
      return todos.filter(todo => !todo.complete)

    case Types.SHOW_ALL:
    default:
      console.log(todos)
      return todos
  }
}