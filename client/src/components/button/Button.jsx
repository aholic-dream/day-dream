import React from 'react';
import Style from './button_style.less'
class Button extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let el;
    let porps = this.props;
    let className = `${Style.myButton} ${(porps.type)?porps.type:Style['primary']} ${(porps.size)?porps.size:'small'} ${(porps.color)?porps.color:'blue'}`
    console.log(className)
    if(typeof(this.props.children) === 'string'){
      el = <div className = {className}>{this.props.children}</div>;
    }
    else{
      console.error('必须要是字符串');
      el = null;
    }
    
    return el
  }
}
export default Button;