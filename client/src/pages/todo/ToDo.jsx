import React from 'react';
import Style from './Todo.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ToDoList from '../../components/ToDo/TodoList.jsx';
import store from '../../model/index.js'
import {toggleTodo} from '../../model/action.js'
import { addTodo } from '../../model/action.js'
import { Provider } from 'react-redux'

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const StateTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList)



const Todo = (props) => {
  let el = <Provider  store =  {store}>
    <div className = "todoheader"> todoheader</div>
    <StateTodoList />
    {/* <ToDoList todos = {store.getState().todos} /> */}
  </Provider>;
  return el
}

export default Todo