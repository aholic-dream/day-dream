// src/index.js
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import App from './src/layouts/LayOut'
import Account from './src/pages/account/Account'
import NoMatch from './src/pages/404/404'
import './src/style/index.less'

ReactDom.render(
    <BrowserRouter className = "router">
     <Switch>
        <Route path="/login" exact component={Account}/>    
        <Route  path="/"  component={App}/>
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('app')
)
