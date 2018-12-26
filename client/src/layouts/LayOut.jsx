import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Style from './LayOut.less'

import Sidebar from './Sidebar.jsx'

import Header from '../components/Content/Header/Header.jsx'
import Row from '../components/UI/grid/row.jsx'
import Col from '../components/UI/grid/Col.jsx'
import Avtar from '../components/UI/Avtar/Avtar.jsx'
import dog from '../assets/dog.jpg'

import Badges from '../components/UI/Badges/Badges.jsx'
import ToDo from '../pages/todo/ToDo.jsx'
import Todos from '../pages/todo_x/Todo.jsx'
const About = () => <h2>About</h2>;

import Blog from '../pages/blog/Blog.jsx'
const Users = () => <h2>Users</h2>;

{/* <React.Fragment></React.Fragment> 空标签，不会生成div */}
const LayOut = () => (
  <div className={Style.container}>
    <Sidebar/>

    <main className={Style.ContentContainer}>
      <Header></Header>
      <div className={Style.Main}>
        <Route exact path="/" component={Blog} />
        <Route path="/about"  component={About} />
        <Route path="/users" component={Users} />
        <Route path="/todo" component={ToDo} />
        <Route path="/todo_x" component={Todos} />
      </div>

    </main>
  </div>
)

export default LayOut
