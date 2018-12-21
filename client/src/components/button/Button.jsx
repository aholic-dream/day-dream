import React from 'react';
import Style from './style.less';

console.log(Style)
class Button extends React.Component{
  constructor(props){
    super()
  }
  render(){
    return <div className = {Style.border}> {this.props.lable}</div>
  }
}

export default Button 