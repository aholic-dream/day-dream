import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import Style from './input.less'
class Input extends React.Component {

  constructor() {
    super()
    this.textInput = React.createRef()
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
    console.log(Style[size])
    const classes = classNames(
      Style['input'],
      {
        [`${Style[size]}`]: size
      }
    )
    
    return (
      <input {...others} type={type} className={classes} ref={this.textInput}/>
    )
  }
}

Input.propTypes = {
  placeholder: propTypes.string,
  type: propTypes.string,
  size: propTypes.oneOf(['small', 'normal', 'bg']),
}

export default Input
