import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import styles from './index.less'

console.log(styles)
class Header extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <header className={styles.side_container}>
      <div className={styles.side_top}>
        <div className={styles.logo}>
          <p>Everything For Daily Life</p>
        </div>

        <nav className={styles.side_nav}>

          <a href="">Blog</a>
          <a href="">ToDO</a>
          <a href="">开发</a>
          <a href="">设置</a>
        </nav>

      </div>
      <div className={styles.side_bottom}>
        <div className={styles.login}>
          <button>Welcome To Daily Dream</button>
        </div>
      </div>
    </header>
  }
}

export default Header
