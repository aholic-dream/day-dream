import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import Style from './App.less'


import Content from '../Content/index.jsx'
import Sidebar from '../Sidebar/index.jsx'

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
