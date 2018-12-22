import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import Style from './index.less'

class ContentMain extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div className={Style.MainContainer}>
      <div className={Style.Main}>
        Main Content
      </div>
    </div>
  }
}

export default ContentMain
