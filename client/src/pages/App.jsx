import React from 'react';
import Loadable from 'react-loadable';
import { Router, Route, Link } from 'react-router'

import Login from './Login.jsx';
import Content from './Content.jsx';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLogin : false,
      language: 'zh'
    }
    this.changeLoginState = this.changeLoginState.bind(this);
  }
  changeLoginState (e) {
    e.stopPropagation();
    this.setState({isLogin:!this.state.isLogin})
  }
  render(){
    let el = (this.state.isLogin)? <Content/>: <Login/>;
    return <div onClick={this.changeLoginState}>{el}</div>
  }
}

const MyLoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
      return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
      return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
      return null;
  }
};



export default App;