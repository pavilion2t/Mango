import React from "react"
import axios from 'axios'
import { withRouter } from 'react-router-dom'
@withRouter

class AuthRoute extends React.Component{
  componentDidMount(){
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if(publicList.indexOf(pathname)>-1){
      return null
    }
    // get userInfo  (type? info?)
    axios.get('/user/info').
      then(res => {
        if (res.status == 200){
          if(res.data.code==0){
            // has login info
          }else{
            this.props.history.push('./history')
          }
        }
      })

  }

  render(){
    return null
  }
}

export default AuthRoute
