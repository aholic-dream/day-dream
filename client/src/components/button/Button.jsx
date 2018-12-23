import React from 'react';
import Style from './button_style.less'
// class Button extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     let el;
//     let porps = this.props;
//     let className = `${Style.myButton} ${(porps.type)?porps.type:Style['primary']} ${(porps.size)?Style[porps.size]:Style['normal']} ${(porps.color)?Style[porps.color]:Style['blue']}`
//     let radiu = (porps.radiu)?{borderRadius:porps.radiu}:{};
//     console.log(className)
//     if(typeof(this.props.children) === 'string'){
//       el = <div onselectstart="return false;" className = {className} style = {radiu}>{this.props.children}</div>;
//     }
//     else{
//       console.error('必须要是字符串');
//       el = null;
//     }
    
//     return el
//   }
// }
const Button = (props)=>{
  let el;
  let p = props;
  // debugger
  let className = `${Style.myButton} ${(p.type)?p.type:Style['primary']} ${(p.size)?Style[p.size]:Style['normal']} ${(p.color)?Style[p.color]:Style['blue']}`
  let radiu = (p.radiu)?{borderRadius:p.radiu}:{};
  if(typeof(p.children) === 'string'){
    el = <div className = {className} style = {radiu}>{p.children}</div>;
  }
  else{
    console.error('必须要是字符串');
    el = null;
  }
  return el
}
export default Button;