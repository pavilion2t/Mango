import React from 'react'
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from './Auth.redux'

function App(){
  return <h1>Group2</h1>
}
class Dashboard extends React.Component{

  render(){
    console.log(this.props)
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
        <ul>
          <li><Link to='/dashboard/'>Group01</Link></li>
          <li><Link to='/dashboard/Group02' exact component={App}>Group02</Link></li>
          <li><Link to='/dashboard/Group03' component={App}>Group03</Link></li>
        </ul>
      </div>
    )
    return (
      this.props.isAuth ? app : redirectToLogin
    )
  }
}

const mapStateToProps = state => {
  const { auth } = state
  return auth
}

const mapDispatchToProps = dispatch => {
  return {
      logout
    }
}
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default VisibleTodoList
