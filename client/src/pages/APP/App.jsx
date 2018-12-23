import React from 'react'
import Style from './index.less'
// import Router from '../../routes/index'

import Content from '../../components/Content/Content.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import Button from '../../components/button/Button.jsx'

class Index extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={Style.contianer}>
        {this.props.children}
      </div>
    )
  }
}


{/* <Sidebar />
<Content>
  <Button color='red' radiu='10px' size='small'>
    red
  </Button>
  <Button color='blue' size='normal'>
    blue
  </Button>
  <Button color='white' size='big'>
    white
  </Button>
</Content> */}

export default Index
