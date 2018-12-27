import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

class Input extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    const props = this.props
    const {
      type = 'text',
      size = 'normal',
      placeholder = '',
      refs,
      ...others
    } = props
    console.log(ref)
    const classes = classNames(
      'input',
      {
        [`${size}`]: size
      }
    )
    
    return (
      <input {...others} type={type} className={classes} placeholder={placeholder} ref={refs}/>
    )
  }
}

Input.propTypes = {
  placeholder: propTypes.string,
  type: propTypes.string,
  size: propTypes.oneOf(['small', 'normal', 'big']),
}

export default Input
