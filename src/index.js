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

let store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
   <BrowserRouter>
     <Provider store={store}>
       <div>
         <AuthRoute></AuthRoute>
         <Route path='/login' exact component={Login}></Route>
         <Route path='/register' component={Register}></Route>
       </div>
     </Provider>
   </BrowserRouter>,
document.getElementById('root'));
