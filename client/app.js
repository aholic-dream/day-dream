// src/index.js
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import LayOut from './src/layouts/LayOut.jsx'
import './src/style/index.less'

ReactDom.render(
    <BrowserRouter className = "router">
		  <Route path="/" component={LayOut}></Route>
    </BrowserRouter>,
  document.getElementById('app')
)
