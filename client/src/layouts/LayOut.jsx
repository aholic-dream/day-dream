import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Style from './LayOut.less'

import Sidebar from './Sidebar.jsx'

import Header from '../components/Content/Header/Header.jsx'
import ToDo from '../pages/todo/ToDo.jsx'
import Todos from '../pages/todo_x/Todo.jsx'
import Blog from '../pages/blog/Blog.jsx'

{/* <React.Fragment></React.Fragment> 空标签，不会生成div */}
const LayOut = () => (
  <div className={Style.container}>
    <Sidebar/>

    <main className={Style.ContentContainer}>
      <Header></Header>

      <div className={Style.Main}>
          <Route path="/" exact component={Blog} />
          <Route path="/todo"  component={Todos} />
      </div>
    </main>
  </div>
)

export default LayOut
