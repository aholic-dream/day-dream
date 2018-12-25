import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Style from './Sidebar.less'
import Button from '../components/UI/Button/Button.jsx'
class Sidebar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <header className={Style.side_container}>
        <div className={Style.side_top}>
          <div className={Style.logo}>
            <p>Everything For Daily Life</p>
          </div>
          <nav className={Style.side_nav}>
            <Link to="/">Blog</Link>
            <Link to="/users">Users</Link>
            <Link to="/todo">ToDo</Link>
            <Link to="/users">Users</Link>
          </nav>
        </div>
        <div className={Style.side_bottom}>
          <div className={Style.login}>
            <Button>Welcome To Daily Dream</Button>
          </div>
        </div>
      </header>
    )
  }
}

export default Sidebar
