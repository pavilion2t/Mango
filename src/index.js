import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Login from './container/login/login';
import Register from './container/register/register';
import reducers from './reducer.js'
import './config'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'

let store = createStore(reducers, applyMiddleware(thunk))
function Boss(){
  return <h2>Boss</h2>
}
ReactDOM.render(
   <BrowserRouter>
     <Provider store={store}>
       <div>
         <AuthRoute></AuthRoute>
         <Route path='/bossInfo' component={BossInfo}></Route>
         <Route path='/boss' component={Boss}></Route>
         <Route path='/login' component={Login}></Route>
         <Route path='/register' component={Register}></Route>
       </div>
     </Provider>
   </BrowserRouter>,
document.getElementById('root'));
