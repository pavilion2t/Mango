import React from 'react'
import Logo from '../../component/logo/logo'
import { List,InputItem,WingBlank,WhiteSpace,Button,Radio } from 'antd-mobile'

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type: "genius",
    }
  }

  render(){
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo />
        <h2>注册页</h2>
        <List>
          <InputItem>用户</InputItem>
          <InputItem>密码</InputItem>
          <InputItem>确认密码</InputItem>
          <WhiteSpace/>
          <RadioItem checked={this.state.type === "genius"}>
            牛人
          </RadioItem>
          <RadioItem checked={this.state.type === "boss"}>
            老板
          </RadioItem>
          <Button type="primary">注 册</Button>
        </List>
      </div>
    )
  }
}

export default Register
