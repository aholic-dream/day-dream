import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import RowContext from './RowContext.jsx'

class Col extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const props = this.props
    const {
      offset,
      order,
      pull,
      push,
      span,
      className,
      children,
      style,
      ...others
    } = props

    let sizeClassObj = {}

    ;['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
      let sizeProps = {}
      if (typeof props[size] === 'number') {
        sizeProps.span = props[size]
      } else if (typeof props[size] === 'object') {
        sizeProps = props[size] || {}
      }

      delete others[size]

      sizeClassObj = {
        ...sizeClassObj,
        [`col-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
        [`col-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
        [`col-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
        [`col-${size}-order-${sizeProps.order}`]:
          sizeProps.order || sizeProps.order === 0,
        [`col-${size}-offset-${sizeProps.offset}`]:
          sizeProps.offset || sizeProps.offset === 0
      }
    })

    const classes = classNames(
      'col',
      {
        [`col-${span}`]: span !== undefined,
        [`col-order-${order}`]: order,
        [`col-offset-${offset}`]: offset,
        [`col-push-${push}`]: push,
        [`col-pull-${pull}`]: pull,
      },
      className,
      sizeClassObj,
    )

    return (
      <RowContext.Consumer>
        {(gutter) => {
         return <div className={classes} style={(
            gutter > 0 ? {
              paddingLeft: gutter / 2,
              paddingRight: gutter / 2,
              ...style
            } : style
          )}>{children}</div>
        }}
      </RowContext.Consumer>
    )
  }
}

Col.propTypes = {
  offset: propTypes.number,
  order: propTypes.number,
  pull: propTypes.number,
  push: propTypes.number,
  span: propTypes.number,

  xs: propTypes.oneOfType([propTypes.number, propTypes.object]),
  sm: propTypes.oneOfType([propTypes.number, propTypes.object]),
  md: propTypes.oneOfType([propTypes.number, propTypes.object]),
  lg: propTypes.oneOfType([propTypes.number, propTypes.object]),
  xl: propTypes.oneOfType([propTypes.number, propTypes.object]),
  xxl: propTypes.oneOfType([propTypes.number, propTypes.object])
}

export default Col
