import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Style from './index.less'

const Blog = () => import('../../../pages/Blog/index.jsx')

class ContentMain extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={Style.MainContainer}>
        <div className={Style.Main}>
          Main Content
          <Route path="/blog" component={Blog}></Route>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default ContentMain
