import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Style from './Main.less'


const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Blog = () => <h2>Blog</h2>;
const Users = () => <h2>Users</h2>;
const ToDo = () => <h2>ToDo</h2>;

class ContentMain extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={Style.MainContainer}>
        <div className={Style.Main}>
          <Route path="/blog/" exact component={Blog} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          <Route path="/todo/" component={ToDo} />
        </div>
      </div>
    )
  }
}

export default ContentMain
