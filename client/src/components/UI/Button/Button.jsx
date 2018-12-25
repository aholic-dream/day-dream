import React from 'react';
import Style from './button_style.less';
import PropTypes from 'prop-types';
import { normalize } from 'path';

  const Button = ({children,size,color,radiu,type})=>{
  let el;
  let className = `${Style.myButton} ${Style[size]} ${Style[color]}`
  let radiuObj ={borderRadius:radiu};
  return <button className = {className} style = {radiuObj}>{children}</button>
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  size:PropTypes.string,
  color:PropTypes.string,
  radiu:PropTypes.string
}
Button.defaultProps = {
  type: 'normal',
  // icon fab normal
  children: 'button',
  size:'normal',
  color:'blue',
  radiu:'2px'
};
export default Button
