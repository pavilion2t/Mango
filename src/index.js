import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Login from './container/login/login';
import Register from './container/register/register';
import reducers from './reducer.js'
import './config'

let store = createStore(reducers, applyMiddleware(thunk))
function Dashboard(){
  return <h2>Dashboard</h2>
}
ReactDOM.render(
     <Provider store={store}>
       <BrowserRouter>
       <div>
         <Switch>
         <Route path='/login' component={Login}></Route>
         <Route path='/register' component={Register}></Route>
         <Route component={Dashboard}></Route>
         </Switch>
       </div>
       </BrowserRouter>
     </Provider>,
document.getElementById('root'));
