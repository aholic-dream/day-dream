// src/index.js
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import LayOut from './src/layouts/LayOut.jsx'
import './src/style/index.less'

//import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from './src/model/index.js'



ReactDom.render(
  <Provider store={store}>
    <BrowserRouter className = "router">
		  <Route path="/" component={LayOut}></Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
