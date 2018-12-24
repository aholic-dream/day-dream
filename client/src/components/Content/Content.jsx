import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import ContentHeader from './Header/Header.jsx'
import ContentMain from './Main/Main.jsx'
import Style from './Content.less'

import Button from '../UI/Button/Button.jsx'

class Content extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <main className={Style.ContentContainer}>
      <ContentHeader></ContentHeader>
      <ContentMain></ContentMain>
      <Button type= 'dashed'>23</Button>
    </main>
  }
}

export default Content
