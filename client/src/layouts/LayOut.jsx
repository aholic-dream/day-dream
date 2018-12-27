import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Style from './LayOut.less'

import Sidebar from './Sidebar.jsx'

import Header from '../components/Content/Header/Header.jsx'
import {Row, Col} from '../components/UI/grid/index.jsx'
import Avtar from '../components/UI/Avtar/Avtar.jsx'
import dog from '../assets/dog.jpg'
import Button from '../components/UI/Button/Button.jsx'
import Badges from '../components/UI/Badges/Badges.jsx'
import ToDo from '../pages/todo/ToDo.jsx'
import Todos from '../pages/todo_x/Todo.jsx'
const About = () => <h2>About</h2>;
const Blog = () => <h2>Blog</h2>;
const Users = () => <h2>Users</h2>;

{/* <React.Fragment></React.Fragment> 空标签，不会生成div */}
const LayOut = () => (
  <div className={Style.container}>
    <Sidebar/>

    <main className={Style.ContentContainer}>
      <Header></Header>

      <div className={Style.Main}>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/about"  component={About} />
          <Route path="/users" component={Users} />
          <Route path="/todo" component={ToDo} />
          <Route path="/todo_x" component={Todos} />
        </Switch>
      </div>
    </main>
  </div>
)

export default LayOut
