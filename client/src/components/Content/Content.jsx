import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import ContentHeader from './Header/Header.jsx'
import ContentMain from './Main/Main.jsx'
import Avtar from '../UI/Avtar/Avtar.jsx'
import Style from './Content.less'

import dog from '../../assets/dog.jpg'

import Button from '../UI/Button/Button.jsx'
import Row from '../UI/grid/Row.jsx'
import Col from '../UI/grid/Col.jsx'

import Badges from '../UI/Badges/Badges.jsx'

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
      <Badges/> <Badges color = 'rgb(225, 0, 80)'/> <Badges color = '#3f51b5'/> 
      <Row>
        <Col span={12} xs={{span: 1, push: 2}} sm={{span: 12, push: 3}}>12313</Col>
      </Row>
    </main>
  }
}

export default Content
