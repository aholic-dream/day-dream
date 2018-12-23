import React from 'react';
import Login from './Login.jsx';
import Content from './Content.jsx';
import AsyncComponent from '../components/asyn/Async.jsx';
import Button from '../components/button/Button.jsx';

import { Router, Route, Link } from 'react-router'


const AsyncHome = AsyncComponent(() => import('../components/button/Button.jsx'));

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLogin : false
    }
    this.changeLoginState = this.changeLoginState.bind(this);
  }
  changeLoginState (e) {
    e.stopPropagation();
    this.setState({isLogin:!this.state.isLogin})
  }
  render(){
  let el = (this.state.isLogin)?<Content component = {AsyncHome}/>: <Login/>;
    return <div onClick={this.changeLoginState}>{el}</div>
  }
}

export default App;