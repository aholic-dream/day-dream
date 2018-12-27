import React from 'react'
import style from './button.less'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({ children, size, color, radiu, border, type, ...props }) => {
  let el, className
  if (type === 'text') {
    className = classnames(
      style['myButtonBase'],
      style['t' + color],
      style[size],
      style[border]
    )
  } else {
    className = classnames(
      style['myButtonBase'],
      style[size],
      style[color],
      style['add']
    )
  }
  let radiuObj ={borderRadius:radiu};
  let show = (loading)?(<i className={classnames('iconfont',style['rotate'])} >&#xe65d;</i>):(null)
  el = <button 
          disabled={!!props.disabled}
          {...props} 
          className = {className}
          style = {radiuObj}>
          <span>{show}{children}</span>
  </button>
  return el
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  size:PropTypes.string,
  color:PropTypes.string,
  radiu:PropTypes.string,
  loading:PropTypes.bool,
  border:PropTypes.oneOf(['dashed', 'solid','dotted','none'])
}

Button.defaultProps = {
  type: 'normal',
  children: 'button',
  size:'normal',
  color:'blue',
  radiu:'2px',
  border:'none',
  loading:false
};



export default Button
