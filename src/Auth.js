import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from './Auth.redux'

class Auth extends React.Component{
  render(){
    return (
      <div>
        { this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
        <h2>login</h2>
        <button onClick={this.props.login}> Login </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { auth } = state
  return auth
}

const mapDispatchToProps = dispatch => {
  return {
      login
    }
}
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)

export default VisibleTodoList
