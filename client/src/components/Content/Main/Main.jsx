import React from 'react'
import { BrowserRouter as Router, Route, Link, IndexRoute} from 'react-router-dom'
import Style from './Main.less'
import Button from '../../UI/Button/Button.jsx'

const About = () => <h2>About</h2>;
const Blog = () => <h2>Blog</h2>;
const Users = () => <h2>Users</h2>;
import ToDo from "";

class ContentMain extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={Style.MainContainer}>
        <div className={Style.Main}>
          <Route exact path="/" component={Blog} />
          <Route path="/about"  component={About} />
          <Route path="/users" component={Users} />
          <Route path="/todo" component={ToDo} />
        </div>
      </div>
    )
  }
}

export default ContentMain
