import React from 'react'
import { NavBar, InputItem, TextAreaItem } from 'antd-mobile'
import { AvatarSelector } from '../../component/avatar-selector/avatar-selector'

class BossInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
    }
  }

  onChange(key,val){
    this.setState({[key]:val})
  }

  render(){
    return (
      <div>
        <NavBar>
          fulfill BossInfo page
        </NavBar>
        <AvatarSelector></AvatarSelector>
        <InputItem onChange={(v)=>this.onChange('title',v)}>
          招聘职位
        </InputItem>
      </div>
    )
  }
}

export default BossInfo
