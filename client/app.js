// src/index.js
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import App from './src/layouts/LayOut.jsx'
import Account from './src/pages/account/Account'
import './src/style/index.less'

ReactDom.render(
    <BrowserRouter className = "router">
     <div>
        <Route exact path="/app" component={App}/>
        <Route path="/login" component={Account}/>
      </div>
    </BrowserRouter>,
  document.getElementById('app')
)
