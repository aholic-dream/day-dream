import React from 'react'
import Button from '../../components/UI/Button/Button.jsx'
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
      </div>
    )
  }
}

export default Blog
