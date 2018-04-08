import React from 'react'
import axios from 'axios'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'

@connect(
  state => state.chatuser,
  { getUserList }
)
class Genius extends React.Component{

  componentDidMount(){
    this.props.getUserList("genius")
  }

  render(){
    return (
      <UserCard userList={this.props.userList}></UserCard>
    )
  }
}

export default Genius
