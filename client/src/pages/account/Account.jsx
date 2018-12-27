import React from 'react'
import Card from '@c/UI/Card/Card'
import style from './style.less'
import Avatar from '@c/UI/Avtar/Avtar'
import Input from '@c/UI/Input/Input'
import Button from '@c/UI/Button/Button'
class Account extends React.Component{
  constructor(){
    super()
    this.state={
      isSigin:true
    }
  }
  componentDidMount(){
    //this.refs.emailInput.focus()
  }
  render(){
    let el = <div className={style.container}>
      <Card>
        <header>
          <Avatar/>
          <p>{(this.state.isSigin)?'Sign in': 'Sign up'}</p>
        </header>
        <form>
          <Input></Input>
          {(!this.state.isSigin)?<Input></Input>:null}
          <Input></Input>
          <Button type='text'>Remember me</Button>
          <Button color = 'blue'>{`  OK  `}</Button>
        </form>
      </Card>
      <div className={style.footer}>Build with ❤️ by the daydream.</div>
    </div>
    return el
  }
}

export default Account