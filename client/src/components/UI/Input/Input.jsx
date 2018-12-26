import React from 'react'
import propTypes from 'prop-types'



export default class Input extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {

    return (
      <input type="text"/>
    )
  }
}

Input.propTypes = {
  type: propTypes.string,
  size: propTypes.string,
  
}
