import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import Style from './index.less'

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
        <button>sign in</button>
      
      </div>
    </div>
  }
}

export default ContentHeader
