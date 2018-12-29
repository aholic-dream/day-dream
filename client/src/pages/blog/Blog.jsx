import React from 'react'

import Input from '@c/UI/Input/index'
import { Link, NavLink,Switch ,Route} from 'react-router-dom'

import BlogList from '@c/Blog/BlogList'
import BlogItem from '@c/Blog/BlogItem'

class Blog extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>   
        <Route path={`${this.props.match.path}/:id`}  component={BlogItem}>
        </Route>
        <Route
          exact
          path={this.props.match.path}
          component = {BlogList}
        >
        </Route>
        
      </div>
     
    )
  }
}

export default Blog
