import React from 'react'

import style from './style/index.less';

class Row extends React.Component {
  constructor (props) {
    super()
  }
  render () {
    return (
      <div className={style.row}>
        <div className={style['col-2']}>2</div>
        <div className={style['col-2']}>2</div>
        <div className={style['col-2']}>2</div>
        <div className={style['col-2']}>2</div>
        <div className={style['col-2']}>2</div>
      </div>
    )
  }
}

export default Row