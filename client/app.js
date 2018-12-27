// src/index.js
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import App from './src/layouts/LayOut.jsx'
import Account from './src/pages/account/Account'
import './src/style/index.less'

ReactDom.render(
    <BrowserRouter className = "router">
     <Switch>
        <Route  path="/" component={App}/>
        <Route path="/login" exact component={Account}/>
      </Switch>
    </BrowserRouter>,
  document.getElementById('app')
)
