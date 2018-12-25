// src/index.js
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './src/pages/App.jsx'
import './src/style/index.less'

ReactDom.render(
  <BrowserRouter className = "router">
		<Route path="/" component={App}></Route>
  </BrowserRouter>,
  document.getElementById('app')
)
