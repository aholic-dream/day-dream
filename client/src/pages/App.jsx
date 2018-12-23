import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



import Sidebar from '../components/Sidebar/Sidebar.jsx'
import Button from '../components/UI/Button/Button.jsx'
import SideBar from './SideBar.jsx'

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Blog = () => <h2>Blog</h2>;
const Users = () => <h2>Users</h2>;
const ToDo = () => <h2>ToDo</h2>;

const App = () => (
  <Router>
    <div style={{display:"flex"}}>
      <SideBar> </SideBar>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      <Route path="/todo/" component={ToDo} />
      <Route path="/blog/"  component={Blog} />
    </div>
  </Router>
);

export default App;