import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import RowContext from './RowContext.jsx'

export default class Row extends React.Component {
  constructor (props) {
    super(props)
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
    let preClass = type === 'flex' ? 'row-flex' : 'row'
    let classes = classNames(preClass, {
      [`${preClass}-${align}`]: align,
      [`${preClass}-${justify}`]: justify
    })
    let rowStyle = (gutter > 0
        ? {
          marginLeft: gutter / -2,
          marginRight: gutter / -2,
          ...style
        }
        : style)
        console.log(<RowContext.Provider value={{gutter}}>
          <div {...other} className={classes} style={rowStyle}>
            {children}
          </div>
        </RowContext.Provider>)
    return (
      <RowContext.Provider value={gutter}>
        <div {...other} className={classes} style={rowStyle}>
          {children}
        </div>
      </RowContext.Provider>
    )
  }
}

Row.propTypes = {
  align: propTypes.oneOf(['top', 'middle', 'bottom']),
  gutter: propTypes.oneOfType([propTypes.number, propTypes.object]),
  justify: propTypes.oneOf([
    'start',
    'end',
    'center',
    'space-bettween',
    'space-around'
  ]),
  type: propTypes.string
}
