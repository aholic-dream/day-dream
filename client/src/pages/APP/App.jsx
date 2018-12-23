import React, {Component} from 'react'
import Style from './App.less'
import Router from '../../routes/index'

import Content from '../../components/Content/index.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import Button from '../../components/button/Button.jsx'
class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div className={Style.contianer}>
      <Sidebar></Sidebar>
      <Content>
        <Button color='red' radiu = '10px' size='small'>red</Button>
        <Button color='blue' size='normal'>blue</Button>
        <Button color='white' size='big'>white</Button>
      </Content>
    </div>
  }
}


export default App
