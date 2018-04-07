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
import GeniusInfo from './container/geniusinfo/geniusinfo'

let store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
     <Provider store={store}>
       <BrowserRouter>
       <div>
         <AuthRoute></AuthRoute>
         <Route path='/bossinfo' component={BossInfo}></Route>
         <Route path='/geniusinfo' component={GeniusInfo}></Route>
         <Route path='/login' component={Login}></Route>
         <Route path='/register' component={Register}></Route>
       </div>
       </BrowserRouter>
     </Provider>,
document.getElementById('root'));
