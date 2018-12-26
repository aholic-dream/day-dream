import React from 'react';
import Style from './Todo.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ToDoList from '../../components/ToDo/TodoList.jsx';
import store from '../../model/index.js'
import {toggleTodo} from '../../model/action.js'
import { addTodo } from '../../model/action.js'

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

const Todoboottom = connect()(({dispatch})=>{
  let el =<div className = "todoboottom"  
    onClick = {(e)=>{
      e.preventDefault();
      e.stopPropagation();
      dispatch(addTodo({text:'fddfsdfsg',id:56}))
    }}>  
    todolist
  </div>
  return el
})


const Todo = (props) => {
  let el = <div>
    <div className = "todoheader"> todoheader</div>
    {/* <StateTodoList /> */}
    <ToDoList todos = {store.getState().todos}/>
    <Todoboottom/>
  </div>;
  return el
}

export default Todo