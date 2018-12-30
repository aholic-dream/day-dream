import React from 'react'
import Card from '@c/UI/Card/Card'
import style from './style.less'
import Avatar from '@c/UI/Avtar/Avtar'
import Input from '@c/UI/Input/Input'
import Button from '@c/UI/Button/Button'
import {Row,Col} from '@c/UI/grid'
import CheckBox from '@c/UI/CheckBox/CheckBox'
class Account extends React.Component{
  constructor(){
    super()
    this.state={
      isSigin:!true
    }
  }
  componentDidMount(){
    // TODO: this.refs.emailInput.focus()
    console.log(fetch)
  }
  toggle(){
    this.setState({isSigin:!this.state.isSigin})
  }
  submit(){
    let p ={
      "loginname":"eks1",
      "pass": "mima001",
      "rePass": "mima001",
      "email":"eks1@email.com"
    }
    let options = {
      method:'POST',
      mode: "no-cors",
      body:p,
      headers:{"Content-Type":'application/json'}
    }
    fetch('/api/auth/signup', options)
    .then(function(response) { 
      console.log(response)
    }, function(error) {
      // handle network error
    })
  }
  render(){
    let text = (this.state.isSigin)?'Sign in': 'Sign up';
    let el = <div className={style.container}>
      <Card style={{minWidth:'22rem'}}>
        <header className={style.header}>
          <Avatar/>
          <Button type='text' onClick={()=>{this.toggle()}}>toogle / {text}</Button>
        </header>
        <form>
          <Input prefix='Email Address'></Input>       
          <Input prefix="Input Password"></Input> 
          {(!this.state.isSigin)
            ?<Input prefix="Confirm password"></Input>
            :null}
          <Row>
            <CheckBox label = 'Remember me' id = 'remember'></CheckBox>
          </Row><Row>
            <Button color = 'blue' onClick={(e)=>{e.preventDefault();this.submit()}} style={{width:'100%'}}>{text}</Button>
          </Row>
          
        </form>
      </Card>
      <div className={style.footer}>Build with ❤️ by the daydream.</div>
    </div>
    return el
  }
}

export default Account