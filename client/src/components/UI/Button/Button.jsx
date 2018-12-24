import React from 'react';
import Style from './button_style.less';
import PropTypes from 'prop-types';
import { normalize } from 'path';

// class Button extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     let el;
//     let porps = this.props;
//     let className = `${Style.myButton} ${(porps.type)?porps.type:Style['primary']} ${(porps.size)?Style[porps.size]:Style['normal']} ${(porps.color)?Style[porps.color]:Style['blue']}`
//     let radiu = (porps.radiu)?{borderRadius:porps.radiu}:{};
//     console.log(className)
//     if(typeof(this.props.children) === 'string'){
//       el = <div onselectstart="return false;" className = {className} style = {radiu}>{this.props.children}</div>;
//     }
//     else{
//       console.error('必须要是字符串');
//       el = null;
//     }
    
//     return el
//   }
// }
//const Button = ({ children = 'button',size = 'normal',color = 'blue', radiu = '2px'} = {})=>{
  const Button = ({children,size,color,radiu})=>{
  let el;
  let className = `${Style.myButton} ${Style[size]} ${Style[color]}`
  let radiuObj = {borderRadius:radiu};
  // if(typeof(children) === 'string'){
  //   el = <div className = {className} style = {radiuObj}>{children}</div>;
  // }
  // else{
  //   console.error('必须要是字符串');
  //   el = null;
  // }
  return <button className = {className} style = {radiuObj}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.string,
  size:PropTypes.string,
  color:PropTypes.string,
  radiu:PropTypes.string
}
Button.defaultProps = {
  children: 'button',
  size:'normal',
  color:'blue',
  radiu:'2px'
};
export default Button
