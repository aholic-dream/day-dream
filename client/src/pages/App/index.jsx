import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Style from './index.less'
// components
import Content from '../../components/Content/index.jsx'
import Sidebar from '../../components/Sidebar/index.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={Style.contianer}>
        <Route path="/" component={Sidebar}></Route>
        <Route path="/" component={Content}></Route>
      </div>
    )
  }
}

export default App
