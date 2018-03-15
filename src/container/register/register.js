import React from 'react'
import Logo from '../../component/logo/logo'
import { List,InputItem,WingBlank,WhiteSpace,Button,Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
import "../../index.css"
import { Redirect } from 'react-router-dom'
@connect(
  state => state.user,
  {register}
)
class Register extends React.Component{
  constructor(props){
    super(props);
    this.handleRegister = this.handleRegister.bind(this)
    this.state = {
      type: "genius",
      user: "",
      pwd: "",
      repeatpwd: "",
    }
  }

  handleChange(key,val){
    this.setState({
      [key]: val
    })
  }

  handleRegister(){
    this.props.register(this.state)
  }

  render(){
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo />
        <h2>注册页</h2>
        <List>
          {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
          <InputItem onChange={v => this.handleChange("user",v)}>用户</InputItem>
          <InputItem onChange={v => this.handleChange("pwd",v)} type="password">密码</InputItem>
          <InputItem onChange={v => this.handleChange("repeatpwd",v)} type="password">确认密码</InputItem>
          <WhiteSpace/>
          <RadioItem checked={this.state.type === "genius"}
            onChange={() => this.handleChange("type","genius")}>
            牛人
          </RadioItem>
          <RadioItem checked={this.state.type === "boss"}
            onChange={() => this.handleChange("type","boss")}>
            老板
          </RadioItem>
          <Button type="primary" onClick={this.handleRegister}>注 册</Button>
        </List>
      </div>
    )
  }
}

export default Register
