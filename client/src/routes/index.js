import React from 'react'
import { BrowserRouter, Route, Link, Router } from 'react-router-dom'

const Blog = () => import('../pages/blog/Blog.jsx')
const App = () => import('../pages/app/app.jsx')
const Content = () => import('../components/content/Content.jsx')
const Sidebar = () => import('../components/side_bar/Sidebar.jsx')

let Routers = () => {
  return (
    <BrowserRouter>
      <div>
        <Sidebar></Sidebar>

        <Route path='/' component={App}>

          {/* <Route path='/todo' component={Todo} /> */}
          {/* <Route path='/development' component={Development} /> */}
          {/* <Route path='/setting' component={Setting} /> */}
        </Route>

        <Route path='/blog' component={Blog} />


      </div>
    </BrowserRouter>
  )
}

export default Routers
