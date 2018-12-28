import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import Style from './input.less'

class Input extends React.Component {
  constructor () {
    super()
    this.container = ''
    this.domInput = ''
  }
  saveContainer (node) {
    this.container = node
  }
  saveInput (node) {
    this.domInput = node
  }
  blur () {
    if (this.domInput.value === '') {
      this.container.classList.remove(Style.isCompleted)
      this.container.classList.remove(Style.isActive)
    } else {
      this.container.classList.remove(Style.isActive)
    }
    this.domInput.blur()
  }
  focus () {
    this.container.classList.add(Style.isActive)
    this.container.classList.add(Style.isCompleted)
    this.domInput.focus()
  }
  renderLabel (children) {
    const { prefix, id, size = 'normal'} = this.props
    console.log(prefix)
    if (!('prefix' in this.props)) {
      return children
    }

    const classes = classNames({
      [Style['prefix']]: prefix,
      [Style[`${size}-label`]]: size
    })

    return (
      <div className={Style.container} ref={node => this.saveContainer(node)}>
        <label htmlFor={id} className={classes}>
          {prefix}
        </label>
        {children}
      </div>
    )
  }

  render () {
    const props = this.props
    const {
      type = 'text',
      size = 'normal',
      placeholder = '',
      id,
      ...others
    } = props

    const classes = classNames(Style['input'], {
      [`${Style[size]}`]: size
    })

    return this.renderLabel(
      <input
        {...others}
        id={id}
        type={type}
        className={classes}
        onFocus={e => this.focus(e)}
        onBlur={e => this.blur(e)}
        ref={node => this.saveInput(node)}
      />
    )
  }
}

Input.propTypes = {
  placeholder: propTypes.string,
  type: propTypes.string,
  size: propTypes.oneOf(['small', 'normal', 'big'])
}

export default Input
