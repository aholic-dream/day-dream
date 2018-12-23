import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Style from './App.less'

import Content from '../components/Content/Content.jsx'
import Sidebar from '../components/Sidebar/Sidebar.jsx'
import Button from '../components/button/Button.jsx'
console.log(Style)
const App = () => (
  <Router>
    <div className={Style.container}>
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  </Router>
);

export default App;