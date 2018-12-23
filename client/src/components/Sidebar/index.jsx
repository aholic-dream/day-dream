import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import Style from './index.less'

class Header extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <header className={Style.side_container}>
      <div className={Style.side_top}>
        <div className={Style.logo}>
          <p>Everything For Daily Life</p>
        </div>

        <nav className={Style.side_nav}>
          <a href="">Blog</a>
          <a href="">ToDO</a>
          <a href="">开发</a>
          <a href="">设置</a>
        </nav>

      </div>
      <div className={Style.side_bottom}>
        <div className={Style.login}>
          <button>Welcome To Daily Dream</button>
        </div>
      </div>
    </header>
  }
}

export default Header
