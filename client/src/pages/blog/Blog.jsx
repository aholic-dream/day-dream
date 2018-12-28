import React from 'react'
import Button from '../../components/UI/Button/Button.jsx'
import Input from '@c/UI/Input/index'

class Blog extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Button border='dashed' color = 'blue' size= 'small' disabled = {false}>2</Button>
        <Button color = 'yeelow' loading={true} size= 'normal'>1</Button>
        <Button border='solid' color = 'red' size= 'big'>3</Button>
        <Button color = 'green' size= 'normal'><i className='iconfont'>&#xe61b;</i></Button>
        <hr/>
        <Button type='text' border='dashed' color = 'blue' size= 'small' disabled = {false}>2</Button>
        <Button type='text' color = 'yeelow' size= 'normal'>1</Button>
        <Button type='text' border='solid' color = 'red' size= 'big' loading={true}>3</Button>
        <Button type='text' color = 'green' size= 'normal'><i className='iconfont'>&#xe61b;</i></Button>
        <hr/>
        <h1>Input:</h1>
        <Input prefix="prefix" id="blogInput1" size="small"></Input>
        <Input prefix="topfix" id="blogInput2" size="normal"></Input>
        <div style={{width: '300px'}}>
        <Input prefix="sfafd" id="blogInput3" size="big"></Input>
        </div>
      </div>
    )
  }
}

export default Blog
