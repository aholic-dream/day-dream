import React from 'react'
import Style from './input.less'

console.log(Style)
class Input extends React.Component {
  constructor (props) {
    super()

  }

  render () {

    return <input className={Style['input-border']}/>
  }
}

export default Input