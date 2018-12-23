import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import Style from './index.less'
import Button from '../../button/Button.jsx'
class ContentHeader extends Component {
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

export default ContentHeader
