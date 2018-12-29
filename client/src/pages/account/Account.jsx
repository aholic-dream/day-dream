import React from 'react'
import Card from '@c/UI/Card/Card'
import style from './style.less'
import Avatar from '@c/UI/Avtar/Avtar'
import Input from '@c/UI/Input/Input'
import Button from '@c/UI/Button/Button'
import {Row,Col} from '@c/UI/grid'
class Account extends React.Component{
  constructor(){
    super()
    this.state={
      isSigin:!true
    }
  }
  componentDidMount(){
    // TODO: this.refs.emailInput.focus()
  }
  render(){
    let el = <div className={style.container}>
      <Card>
        <header>
          <Avatar/>
          <p>{(this.state.isSigin)?'Sign in': 'Sign up'}</p>
        </header>
        <form>
          <Input prefix='Email Address'></Input>       
          <Input prefix="Input Password"></Input> 
          {(!this.state.isSigin)
            ?<Input prefix="Confirm password"></Input>
            :null}
          <Row>
            <Button type='text'>Remember me</Button>
          </Row><Row>
            <Button color = 'blue'>{`  OK  `}</Button>
          </Row>

        </form>
      </Card>
      <div className={style.footer}>Build with ❤️ by the daydream.</div>
    </div>
    return el
  }
}

export default Account