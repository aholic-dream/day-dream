import {createStore} from 'redux'
import todoApp from './todo_reducer'

let addTodos = [
  {
    id: 1,
    text: 'aaaa',
    complete: false
  },
  {
    id: 2,
    text: 'aaaa',
    complete: false
  },
  {
    id: 3,
    text: 'aaaa',
    complete: false
  }
]


// store
const store = createStore(todoApp)

export default store
