import React from 'react'
import { Grid, List } from 'antd-mobile'

class AvatarSelector extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
    }
  }

  render(){
    const avatarList = 'a,b,c'
                      .split(',')
                      .map(v=>({
                        icon: require(`../img/${v}.png`),
                        text: v
                      }))
    const gridHeader = this.state.text?
      (<div>
        <span>avatar selected</span>
        <img src={this.state.icon}/>
      </div>): "please select avatar"
    return (
      <div>
        <List renderHeader={()=>gridHeader}>
          <Grid
            data={avatarList}
            columnNum={5}
            onClick={e=>{
              this.setState(e)
              this.props.selectAvatar(e.text)
            }}
          />
        </List>
      </div>
    )
  }
}

export default AvatarSelector
