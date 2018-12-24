import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import ContentHeader from './Header/Header.jsx'
import ContentMain from './Main/Main.jsx'
import Style from './Content.less'

import Button from '../UI/Button/Button.jsx'
import Row from '../UI/grid/Row.jsx'
import Col from '../UI/grid/Col.jsx'

class Content extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <main className={Style.ContentContainer}>
      <ContentHeader></ContentHeader>
      <ContentMain></ContentMain>
      <Button type= 'dashed'>2333</Button>
      <Row align='middle' justify='start' gutter={8} type='flex'>
        <Col className="hahah" span={12} xs={{span: 12,offset: 2}}>12313</Col>
        <Col >123123</Col>
        <Col >123</Col>
        <Col >123</Col>
        <Col >123</Col>
      </Row>
    </main>
  }
}

export default Content
