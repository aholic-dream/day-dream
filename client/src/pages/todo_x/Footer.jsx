import React from 'react'
import FilterLink from './Link.jsx'
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../../model/todo_types';


const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={SHOW_ALL}>All</FilterLink>
    <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default Footer