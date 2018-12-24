import React from 'react'
import Style from './style/index.less'
import propTypes from 'prop-types'

const responseiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];


class Row extends React.Component {
  constructor (props) {
    super(props)
  }
  getGutter () {
    const {gutter} = this.props
    if(typeof gutter === 'Object') {
    }
    return gutter

  }
  render () {
    const {
      type,
      align,
      justify,
      gutter,
      className,
      style,
      children,
      ...other
    } = this.props

    let classes = {}

    return (
      <div className={Style.row}>
        {children}
      </div>
    )
  }
}

Row.propTypes = {
  align: propTypes.oneOf(['top', 'middle', 'bottom']),
  gutter: propTypes.oneOfType([propTypes.number, propTypes.object]),
  justify: propTypes.oneOf(['start', 'end', 'center', 'space-bettween', 'space-around']),
  type: propTypes.string
}

export default Row
