import axios from 'axios'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initstate = {
  isAuth: false,
  msg: '',
  user: '',
  pwd: '',
  type: '',
}
export function user(state=initstate, action){
  switch(action.type){
    case REGISTER_SUCCESS:
      return {...state, msg:'', isAuth: true, ...action.payload}
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg}
    default:
      return state
  }
}

function registerSuccess(data){
  return {type: REGISTER_SUCCESS, payload:data}
}

function errorMsg(msg){
  return { msg, type: ERROR_MSG }
}

export function register({user,pwd,type}){
  if(!user||!pwd||!type){
    return errorMsg("请输入用户名and密码");
  }
  if(pwd!==repeatpwd){
    return errorMsg("密码不一致")
  }

  return dispatch => {
    axios.post('/usr/register', {user,pwd,type})
      .then(res => {
        if(res.status == 200 && res.data.code == 0){
          dispatch(registerSuccess({user,pwd,type}))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
    }
}
