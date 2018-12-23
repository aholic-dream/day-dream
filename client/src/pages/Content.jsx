import React from 'react';
 
class Content extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return React.createElement(this.props.component,{},null)
  }
}


export default Content;