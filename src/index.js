import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import reducers from './reducer.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
   <BrowserRouter>
     <Provider store={store}>
       <Switch>
         <Route path='/login' exact component={Auth}></Route>
         <Route path='/dashboard' component={Dashboard}></Route>
         <Redirect to='/dashboard'></Redirect>
       </Switch>
     </Provider>
   </BrowserRouter>,
document.getElementById('root'));
