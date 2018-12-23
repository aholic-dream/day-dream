import React, {Component} from 'react'
import Style from './App.less'
import Router from '../../routes/index'

import Content from '../../components/Content/index.jsx'
import Sidebar from '../../components/Sidebar/index.jsx'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div className={Style.contianer}>
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  }
}


export default App
