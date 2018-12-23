import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import Style from './Header.less'
import Button from '../../UI/Button/Button.jsx'

class Header extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div className={Style.HeaderContainer}>
      <div className={Style.HeaderLeft}>
        <input type="text" placeholder="search" />
      </div>
      <div className={Style.HeaderRight}>
        <Button>sign in</Button>
      
      </div>
    </div>
  }
}

export default Header
