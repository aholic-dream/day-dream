import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import ContentHeader from './Header/Header.jsx'
import ContentMain from './Main/Main.jsx'
import Avtar from '../UI/Avtar/Avtar.jsx'
import Style from './Content.less'

import dog from '../../assets/dog.jpg'

import Button from '../UI/Button/Button.jsx'
import Row from '../UI/grid/row.jsx'

class Content extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <main className={Style.ContentContainer}>
      <ContentHeader></ContentHeader>
      <ContentMain></ContentMain>
      <Button type= 'dashed'>2333</Button>
      <i className='iconfont'> &#xe627; </i> 
      <Avtar></Avtar>
      <Avtar width = '40px' src={dog}></Avtar>
      <Row></Row>
    </main>
  }
}

export default Content
