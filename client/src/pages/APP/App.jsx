import React, {Component} from 'react'
import Style from './App.less'
import Router from '../../routes/index'

import Content from '../../components/Content/index.jsx'
import Sidebar from '../../components/Sidebar/index.jsx'
import Button from '../../components/button/Button.jsx'
class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div className={Style.contianer}>
      <Sidebar></Sidebar>
      <Content>
      </Content>
      <Button type= 'dashed'>2333</Button>
    </div>
  }
}


export default App
