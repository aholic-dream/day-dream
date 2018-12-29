import React from 'react'
import { Link, NavLink,Switch ,Route} from 'react-router-dom'
import Card from '@c/UI/Card/Card'
import Button from '@c/UI/Button/Button'
const BlogItem = ({ match }) => {
  return <div>
    <h3>blog: {match.params.id}</h3>
      <Link to={`/blog`} >
        <Button>back</Button>
      </Link>
  </div>
};

export default  BlogItem