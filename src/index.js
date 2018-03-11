import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Login from './container/login/login.js';
import Register from './container/register/register.js';
import reducers from './reducer.js'
import './config'

let store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
   <BrowserRouter>
     <Provider store={store}>
       <Switch>
         <Route path='/login' exact component={Login}></Route>
         <Route path='/register' component={Register}></Route>
       </Switch>
     </Provider>
   </BrowserRouter>,
document.getElementById('root'));
