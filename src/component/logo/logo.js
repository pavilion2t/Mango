import React from 'react'
import logoImg from './kangroon.png'

class Logo extends React.Component{

  render(){
    return (
      <div className="logo">
        <img src={logoImg} alt="logo" width="300" height="300"/>
      </div>
    )
  }
}

export default Logo
