import React from 'react'
import { Link, NavLink,Switch ,Route} from 'react-router-dom'
import Card from '@c/UI/Card/Card'
import Button from '@c/UI/Button/Button'

const BlogList = ({ match }) => {
  let list = []
      for (let index = 0; index < 5; index++) {
        
        list.push(  
        <Link key={index} to={`blog/${index}`} >
          <Card> {`blog` + index}</Card>
        </Link>)   
    }
  return <div>
  <h3>bloglist</h3>
   {list}
  </div>
};

export default BlogList