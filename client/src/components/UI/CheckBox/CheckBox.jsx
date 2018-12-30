import React from 'react'

import style from './style.less'
import Button from '../Button/Button'

class CheckBox extends React.Component{
  constructor(props){
    super()
    this.state = {
      checked : false
    }
  }
  toggle(){
    this.setState({checked:!this.state.checked})
  }
  render(){
    let el;
    let {id,label,...props} = this.props
    el = <div className={style.container}>
      <input type="checkbox" id ={id} className={style.checkBox} checked={this.state.checked} onChange={()=>{this.toggle()}}/>
      <label htmlFor= {id} className={style.label}>{label}</label>
    </div>

    return el
  }
}
export default CheckBox