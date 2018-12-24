import React from 'react';
import style from './Badges.less';
import PropTypes from 'prop-types';

class Badges extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      number: 100 
    }
  }
  //componentWillMount(){}
  render(){
    let el;
    let num = this.state.number;
    let cssObj = {backgroundColor:this.props.color};
    el = (num > 99)?<span className={style.badges} style={cssObj}>99+</span>:(num > 0)?<span className={style.badges} style={cssObj}>{num}</span>:null;
    return el
  }
  // componentDidMount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // //render()
  // componentDidUpdate(){}

  // componentWillUnmount(){}
}

Badges.propTypes = {
  color:PropTypes.string,
}
Badges.defaultProps = {
  color:'#2196f3',

};
export default Badges
