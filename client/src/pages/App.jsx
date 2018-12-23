import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Content from '../components/Content/index.jsx'
import Sidebar from '../components/Sidebar/Sidebar.jsx'
import Button from '../components/button/Button.jsx'

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const App = () => (
  <Router>
    <div>
      <Sidebar> </Sidebar>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default App;