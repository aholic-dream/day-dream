import React from 'react'
<<<<<<< HEAD
import Style from './style/index.less'
import propTypes from 'prop-types'

const responseiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

=======

import style from './style/index.less';
>>>>>>> 7358f912bc62c8f5dcc9f050f43cdb7f1625737e

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
