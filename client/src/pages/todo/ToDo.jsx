import React from 'react';
import Style from './Todo.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ToDoList from '../../components/ToDo/TodoList.jsx';
import store from '../../model/index.js'

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const StateTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList)

const Boottom = ({dispatch })=>{
  let el =<div className = "todoboottom"  
  onClick = {(e)=>{
    e.preventDefault();
    e.stopPropagation();
    dispatch(addTodo('fdsg'))
  }}>  
  todolist</div>
  return el
}
const Todoboottom = connect()(Boottom);


const Todo = (props) => {
  let el = <div>
    <div className = "todoheader"> todoheader</div>
    <StateTodoList />
    {/* <ToDoList todos = {store.getState().todos}/> */}
    <Todoboottom/>
  </div>;
  return el
}

export default Todo