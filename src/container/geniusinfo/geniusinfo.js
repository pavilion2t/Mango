import React from 'react'
import { NavBar, InputItem, TextAreaItem, Button } from 'antd-mobile'
import { AvatarSelector } from '../../component/avatar-selector/avatar-selector'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
@connect(
  state=>state.user,
  {update}
)
class GeniusInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      avatar: ''
    }
  }

  onChange(key,val){
    this.setState({[key]:val})
  }

  render(){
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
        <NavBar>fulfill GeniusInfo page</NavBar>
        <AvatarSelector
          selectActive={(imgname)=>{ this.setState(avatar: imgname)}}>
        </AvatarSelector>
        <InputItem onChange={(v)=>this.onChange('title',v)}>求职岗位</InputItem>
        <TextAreaItem
          onChange={(v)=>this.onChange('desc',v)}
          autoHeight
          title="个人简介"
          rows={3}>
        </TextAreaItem>
        <Button
          onclick={this.props.update(this.state)}
          type="primary">save</Button>
      </div>
    )
  }
}

export default GeniusInfo
