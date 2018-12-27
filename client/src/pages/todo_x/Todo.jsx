import React from 'react'
import TodoList from './List.jsx'
import Footer from './Footer.jsx'
import AddTodo from './AddTodo.jsx'
import store from '../../model/todos_index'
import { Provider } from 'react-redux'
import Card from '../../components/UI/Card/Card.jsx'


export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Provider store={store}>
          <h1>Todo List</h1>
          <AddTodo />
          <hr/>
          <TodoList />
          <hr/>
          <Footer />

        </Provider>
      </div>
    )
  }
}
