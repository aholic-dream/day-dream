import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import ContentHeader from './ContentHeader/index.jsx'
import ContentMain from './ContentMain/index.jsx'
import Style from './index.less'

class Content extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <main className={Style.ContentContainer}>
      <ContentHeader></ContentHeader>
      <ContentMain>
      </ContentMain>
      {this.props.children}
    </main>
  }
}

export default Content
