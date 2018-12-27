import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import Style from './card.less'
class Card extends React.Component {
  constructor () {
    super()
  }

  render () {
    const props = this.props
    let {
      id,
      className,
      type = 'inline-block',
      border = true,
      children,
      extra,
      ...others
    } = props

    let classes = classNames(className, {
      [Style['card-fluid']]: type !== 'inline-block',
      [Style.card]: type === 'inline-block',
      [Style['card-border']]: border,
      [Style['card-close']]: close
    })

    return (
      <div className={classes} {...others}>
        <div className={Style.header}>
          <div className={Style.left}>{id}.</div>
          {extra ? (
            extra
          ) : (
            ''
          )}
        </div>
        <div className={Style.content}>{children}</div>
      </div>
    )
  }
}

Card.propTypes = {
  border: propTypes.bool,
  type: propTypes.string,
}
Card.defaultProps = {
  type: 'inline-block', // fluid
  border: true,
}

export default Card
