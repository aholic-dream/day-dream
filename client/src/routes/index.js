import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Blog = () => import('../pages/Blog/index.jsx')
const App = () => import('../pages/App/index.jsx')

const Router = () => {
  return (
    <BrowserRouter>
      <Route component={App}>
        <Route path='/blog' component={Blog} />
      </Route>
      {/* <Route path='/todo' component={Todo} /> */}
      {/* <Route path='/development' component={Development} /> */}
      {/* <Route path='/setting' component={Setting} /> */}
    </BrowserRouter>
  )
}

export default Router
