import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Style from './LayOut.less'

import Sidebar from './Sidebar.jsx'

import Header from '../components/Content/Header/Header.jsx'
import ToDo from '../pages/todo/ToDo.jsx'
import Todos from '../pages/todo_x/Todo.jsx'
import Blog from '../pages/blog/Blog.jsx'
import Input from '@c/UI/Input'
import Button from '@c/UI/Button/Button'

{/* <React.Fragment></React.Fragment> 空标签，不会生成div */}
const Users = ()=>{
  return <div>
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
}
const LayOut = () => (
  <div className={Style.container}>
    <Sidebar/>

    <main className={Style.ContentContainer}>
      <Header></Header>

      <div className={Style.Main}>
        <Switch>
          <Route path="/blog"  component={Blog} />
          <Route path="/todo" exact component={Todos} />
          <Route path="/users" exact component={Users} />
        </Switch>
      </div>
    </main>
  </div>
)

export default LayOut
