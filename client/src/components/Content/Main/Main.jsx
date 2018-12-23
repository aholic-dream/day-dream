import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Style from './Main.less'

const Blog = () => import('../../../pages/blog/Blog.jsx')

class ContentMain extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={Style.MainContainer}>
        <div className={Style.Main}>
          Main Content
          {this.props.children}

          [<Route path="/blog" component={Blog}></Route>]
        </div>
      </div>
    )
  }
}

export default ContentMain
