import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import Style from './input.less'
class Input extends React.Component {

  constructor() {
    super()
    this.domInput = ''
  }
  saveInput (node) {
    this.domInput = node
  }
  blur () {
    this.domInput.blur()
  }
  focus() {
    this.domInput.focus()
  }
  render () {
    const props = this.props
    const {
      type = 'text',
      size = 'normal',
      placeholder = '',
      ...others
    } = props
    const classes = classNames(
      Style['input'],
      {
        [`${Style[size]}`]: size
      }
    )
    
    return (
      <input {...others} type={type} className={classes} ref={node => this.saveInput(node)}/>
    )
  }
}

Input.propTypes = {
  placeholder: propTypes.string,
  type: propTypes.string,
  size: propTypes.oneOf(['small', 'normal', 'bg']),
}

export default Input
