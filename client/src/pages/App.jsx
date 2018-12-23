import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Style from './App.less'

import Sidebar from '../components/Sidebar/Sidebar.jsx'
import Content from '../components/Content/Content.jsx'

const App = () => (
  <div className={Style.container}>
    <Sidebar />
    <Content />
  </div>
)

export default App
