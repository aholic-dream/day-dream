import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Style from './sidebar.less'

function Menu (){
    let el = 
    <nav>
      <ul className={Style.side_nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
        <li>
          <Link to="/todo/">ToDo</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
      </ul>
    </nav>
  return el
}

const Sidebar = (props) => {
  let el = <header>
    <div className='log'></div>
    <Menu></Menu>
    <div className="info"></div>
  </header>
  return el
}


export default Sidebar