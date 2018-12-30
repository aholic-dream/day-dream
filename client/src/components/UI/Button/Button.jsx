import React from 'react'
import style from './button.less'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({
  children,
  size,
  color,
  radiu,
  border,
  type,
  loading,
  ...props
}) => {
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
  // 接受传进来的 style

  let styleObj = Object.assign({ borderRadius: radiu }, props.style)
  delete props.style
  
  let show = loading ? (
    <i className={classnames('iconfont', style['rotate'])}>&#xe65d;</i>
  ) : (null)

  let onclick = (props.onClick)?props.onClick:()=>{};

  el = (
    <button
      {...props}
      disabled={!!props.disabled}
      onClick = { 
        (e)=>{
          onclick(e)
        }
      }
      className={className}
      style={styleObj}
    >
      <span>
        {show}
        {children}
      </span>
    </button>
  )
  return el
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
  color: PropTypes.string,
  radiu: PropTypes.string,
  loading: PropTypes.bool,
  border: PropTypes.oneOf(['dashed', 'solid', 'dotted', 'none'])
}

Button.defaultProps = {
  type: 'normal',
  children: 'button',
  size: 'normal',
  color: 'blue',
  radiu: '2px',
  border: 'none',
  loading: false
}

export default Button
