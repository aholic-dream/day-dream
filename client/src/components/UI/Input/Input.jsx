import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

class Input extends React.Component {

  constructor() {
    super()
    this.input = {}
  }
  saveInput (node) {
    this.input = node
  }
  blur () {
    this.input.blur()
  }
  focus() {
    this.input.focus()
  }
  select() {
    this.input.select()
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
      'x-input',
      {
        [`${size}`]: size
      }
    )
    
    return (
      <input {...others} type={type} className={classes} ref={() => this.saveInput}/>
    )
  }
}

Input.propTypes = {
  placeholder: propTypes.string,
  type: propTypes.string,
  size: propTypes.oneOf(['small', 'normal', 'large']),
}

export default Input
