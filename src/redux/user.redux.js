import axios from 'axios'
import { getRedirectPath } from '../utils'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOGOUT = 'LOGOUT'
const initstate = {
  redirectTo: '',
  isAuth: false,
  msg: '',
  user: '',
  pwd: '',
  type: '',
  repeatpwd:'',
}
export function user(state=initstate, action){
  switch(action.type){
    case AUTH_SUCCESS:
      return {...state, msg:'',redirectTo:getRedirectPath(action.payload), isAuth: true, ...action.payload}
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg}
    case LOGOUT:
      return {...initstate, redirectTo:'./login'}
    default:
      return state
  }
}

export function logoutSubmit(){

}

function authSuccess(data){
  return {type: AUTH_SUCCESS, payload:data}
}

function errorMsg(msg){
  return { msg, type: ERROR_MSG }
}

export function loadDate(userinfo){
  return { type:LOAD_DATA, payload:userinfo}
}

export function update(data){
  return dispatch =>{
    axios.post('/user/update', data)
    .then(res => {
      if(res.status == 200 && res.data.code == 0){
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function login({user,pwd,type}){
  if(!user||!pwd){
    return errorMsg("need user and pwd!!!")
  }
  return dispatch => {
    axios.post('/usr/login', {user,pwd})
      .then(res => {
        if(res.status == 200 && res.data.code == 0){
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
    }
}

export function register({user,pwd,repeatpwd,type}){
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
          dispatch(authSuccess({user,pwd,type}))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
    }
}
