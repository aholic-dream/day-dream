import * as Types from './todo_types'
// reducer
function todos (todos = [], action) {
  switch (action.type) {
    case Types.ADD_TODO:
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case Types.TOGGLE_TODO:
      return todos.map((item, index) => (
        item.id === action.id ? Object.assign({}, item, {completed: !item.completed}) : item
      ))
    case Types.CHANGE_CONTENT_TODO:
      return todos.map((item) => {
        if (item.id === action.id) {
          item.text = action.text
        }
        return item
      })
    case Types.DELE_TODO:
      return state.todos.splice(() => {
        let index
        todos.some((todo, i) => {
          if (todo.id === item.id) {
            index = i
            return true
          }
        })
        return index
      }, 1)
    default: 
      return todos
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case Types.SET_VISILIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default function todoApp (state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}