import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Style from './index.less'

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
            <Link to='/blog'>Blog</Link>
          </nav>
        </div>
        <div className={Style.side_bottom}>
          <div className={Style.login}>
            <button>Welcome To Daily Dream</button>
          </div>
        </div>
      </header>
    )
  }
}

export default Sidebar
