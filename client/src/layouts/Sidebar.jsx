import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
            <NavLink to="/blog"  activeClassName={Style.navActive}>Blog</NavLink>
            <NavLink to="/users" activeClassName={Style.navActive}>Users</NavLink>
            <NavLink to="/todo" activeClassName={Style.navActive}>ToDo</NavLink>
          </nav>
        </div>
          <div className={Style.side_bottom}>
            <div className={Style.login}>
              <Link to={`/login`}>
                <Button>Welcome To Daily Dream</Button>
              </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Sidebar
