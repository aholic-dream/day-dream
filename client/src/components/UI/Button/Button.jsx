import React from 'react';
import style from './button.less';
import PropTypes from 'prop-types';
import classnames from 'classnames'

const Button = ({children,size,color,radiu,border,type,...props})=>{
  let el,
  className;
  if (type === 'text') {
    className = classnames(style['myButtonBase'],style['t'+color],style[size],style[border])
  } else {
    className = classnames(style['myButtonBase'],style[size],style[color],style['add'] )
  }
  let radiuObj ={borderRadius:radiu};
  el = <button disabled = {(props.disabled)?true:false} className = {className} style = {radiuObj}>
      <span>
        {children}
      </span>
    </button>
  return el
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  size:PropTypes.string,
  color:PropTypes.string,
  radiu:PropTypes.string,
  border:PropTypes.oneOf(['dashed', 'solid','dotted','none'])
}
Button.defaultProps = {
  type: 'normal',
  children: 'button',
  size:'normal',
  color:'blue',
  radiu:'2px',
  border:'none'
};



export default Button
